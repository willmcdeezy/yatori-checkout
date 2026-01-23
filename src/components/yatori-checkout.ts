import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import QRCodeStyling from 'qr-code-styling'
// Import Yatori icon - will be bundled inline as base64 (not tamperable)
import yatoriLogo from '../assets/yatori-icon.svg'
import usdcLogo from '../assets/USDC-token.svg'

@customElement('yatori-checkout')
export class YatoriCheckout extends LitElement {
  @property({ type: String }) wallet = ''
  @property({ type: Number }) amount = 0
  @property({ type: Boolean }) useDialog = true

  @state() qrCodeData: string = ''
  @state() qrUrl: string = ''
  @state() yid: string = ''
  @state() confirmed = false
  @state() isMobile = false
  @state() connected = false
  @state() amountError: string = ''
  @state() dialogOpen = false

  private hasInitialized = false
  private wsConnection: WebSocket | null = null

  isMobileDevice(): boolean {
    return /android|iphone|ipad|ipod/i.test(navigator.userAgent)
  }

  validateAmount(): boolean {
    // Check decimal places and amount range
    const decimalRegex = /^\d+(\.\d{1,2})?$/

    if (!decimalRegex.test(this.amount.toString())) {
      this.amountError = 'Amount must have no more than two decimal places'
      return false
    }

    if (this.amount > 9999.99) {
      this.amountError = 'Amount cannot exceed $9,999.99'
      return false
    }
    if (this.amount < 0.01) {
      this.amountError = 'Amount must at least $0.01'
      return false
    }
    this.amountError = ''
    return true
  }

  static styles = css`
  :host {
    display: flex-column;
    padding: 0;
    text-align: center;
    font-family: sans-serif;
    box-sizing: border-box;
    color: inherit;
  }

  :host > div {
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 12px auto;
  }

  .qr-wrapper {
    opacity: 1;
    transition: opacity 0.5s ease;
    background: #ffffff;
    border-radius: 16px;
    padding: 10px;
    display: inline-block;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
  }

  .qr-wrapper img {
    margin: 0;
    display: block;
  }

  .qr-header {
    font-weight: bold;
    letter-spacing: 0.15em;
    font-size: 10px;
    color: #1c1c1c;
    margin-bottom: 6px;
    margin-top: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background: #ffffff;
  }

  .qr-header img {
    width: 14px;
    height: 14px;
    margin: 0;
  }

  .qr-details {
    margin-top: 6px;
    margin-bottom: 0;
    font-size: 9px;
    color: #4a5568;
    text-align: center;
    line-height: 1.3;
    background: #ffffff;
  }

  .qr-amount {
    font-weight: 600;
    color: #1c1c1c;
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    line-height: 1;
  }

  .qr-amount img {
    width: 12px;
    height: 12px;
    margin: 0;
    display: block;
    flex-shrink: 0;
  }

  .qr-wallet {
    font-size: 8px;
    color:rgb(91, 93, 97);
  }

  .qr-wrapper.fade-out {
    opacity: 0;
  }

  .confirmed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 16px;
    padding: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 160px;
    min-height: 180px;
    gap: 12px;
  }

  .confirmed svg {
    width: 48px;
    height: 48px;
  }

  .confirmed-text {
    font-size: 12px;
    background: linear-gradient(to bottom right, #977DCD, #7DB6C1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
  }

  @keyframes draw-circle {
    0% {
      stroke-dasharray: 251 251;
      stroke-dashoffset: 251;
      opacity: 1;
    }
    100% {
      stroke-dasharray: 251 251;
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  @keyframes draw-check {
    0% {
      stroke-dashoffset: 55;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  .animate-draw-circle {
    stroke-dasharray: 251 251;
    stroke-dashoffset: 251;
    animation: draw-circle 0.8s ease-out forwards;
    transform-origin: center;
    will-change: stroke-dashoffset;
  }

  .checkmark-path {
    stroke-dasharray: 55;
    stroke-dashoffset: 55;
    opacity: 0;
    animation: draw-check 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
    transform-origin: center;
    will-change: stroke-dashoffset, opacity;
  }

  .spinner {
    margin: 24px auto;
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

.deeplink-btn {
  background: white;
  color: #1c1c1c;
  border: 1px solid #000000;
  border-radius: 9999px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 0.15em;
  padding: 12px 20px;
  min-width: 200px;
  width: auto;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: 16px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.deeplink-btn img {
  width: 18px;
  height: 18px;
  margin: 0;
}

.deeplink-btn:hover {
  opacity: 0.9;
}

.deeplink-btn:active {
  background: white;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.dialog-content {
  background: white;
  border-radius: 20px;
  padding: 24px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  position: relative;
  animation: slideUp 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.dialog-close-btn {
  background: #1c1c1c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 24px;
  cursor: pointer;
  margin-top: 16px;
  width: 100%;
  transition: background 0.2s ease;
}

.dialog-close-btn:hover {
  background: #333333;
}

.dialog-close-btn:active {
  background: #1c1c1c;
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 12px;
}

.error-icon {
  width: 48px;
  height: 48px;
  color: #ef4444;
}

.error-message {
  color: #ef4444;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.error-details {
  color: #6b7280;
  font-size: 14px;
  text-align: center;
  max-width: 280px;
}
  `

  async firstUpdated() {
    this.isMobile = this.isMobileDevice()

    // Validate amount before generating QR code
    if (!this.validateAmount()) {
      console.error('yatori-checkout --> Amount must be between 9999.99 and 0.01 & must only have two decimal places for USD format!')
      return // Don't generate QR if amount is invalid
    }

    await this.generateQRCode()
    this.hasInitialized = true

    // Start WebSocket if QR is directly shown (not using dialog and not mobile)
    if (!this.useDialog && !this.isMobile) {
      this.startWebSocketConnection()
    }

    // Add ESC key listener to close dialog
    document.addEventListener('keydown', this.handleKeyDown)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    document.removeEventListener('keydown', this.handleKeyDown)

    // Close WebSocket connection when component is removed
    if (this.wsConnection) {
      this.wsConnection.close()
      this.wsConnection = null
    }
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.dialogOpen) {
      this.dialogOpen = false
    }
  }

  // Watch for amount changes AFTER initial render
  updated(changedProperties: Map<string, any>) {
    // Only regenerate if amount changes AFTER the component has initialized
    if (this.hasInitialized && changedProperties.has('amount')) {
      if (!this.validateAmount()) {
        this.connected = false
        this.confirmed = false
      } else if (this.amountError === '') {
        // If amount becomes valid, regenerate QR
        this.generateQRCode()
      }
    }

    // Start WebSocket when dialog opens
    if (changedProperties.has('dialogOpen') && this.dialogOpen && !this.isMobile) {
      this.startWebSocketConnection()
    }

    // Start WebSocket when QR is directly shown (useDialog=false)
    if (changedProperties.has('useDialog') && !this.useDialog && !this.isMobile && this.hasInitialized) {
      this.startWebSocketConnection()
    }
  }

  async generateQRCode() {
    const generateShortId = (): string => {
      const timestamp = Date.now().toString().slice(-4)
      const random = Math.random().toString(36).substring(2, 6)
      return `${timestamp}${random}`
    }

    this.yid = generateShortId()
    console.log('YATORI YID CREATED')

    const snakeEater = {
      token: 'usdcBasic',
      to: this.wallet,
      amount: this.amount,
      yid: this.yid,
    }

    this.qrUrl = `https://yatori.io/mobile/yatoriRequest?token=${snakeEater.token}&to=${snakeEater.to}&amount=${snakeEater.amount}&yid=${snakeEater.yid}`

    // Generate compact QR code optimized for overlay display
    const qrCodeOptions: any = {
      width: 140,
      height: 140,
      data: this.qrUrl,
      margin: 0,
      dotsOptions: {
        color: '#000000',
        type: 'dots'
      },
      backgroundOptions: {
        color: '#ffffff'
      },
      imageOptions: {
        margin: 0
      },
      cornersSquareOptions: {
        type: 'extra-rounded'
      },
      cornersDotOptions: {
        type: 'rounded'
      }
    }

    const qrCode = new QRCodeStyling(qrCodeOptions)

    // Get the QR code as a data URL
    const blob = await qrCode.getRawData('png')
    if (blob) {
      const reader = new FileReader()
      reader.onloadend = () => {
        this.qrCodeData = reader.result as string
      }
      reader.readAsDataURL(blob)
    }

    // Don't start WebSocket here - wait until QR is visible
  }

  startWebSocketConnection() {
    // Only start if not already connected/connecting and we have a YID
    if (this.wsConnection) {
      const state = this.wsConnection.readyState
      // If already OPEN or CONNECTING, don't create a new connection
      if (state === WebSocket.OPEN || state === WebSocket.CONNECTING) {
        return // Already connected or connecting
      }
      // If CLOSING or CLOSED, we can create a new one
    }

    if (!this.yid) {
      return // No YID generated yet
    }

    this.setupYatoriWebSocket(this.wallet, this.yid)
  }

  setupYatoriWebSocket(walletAddress: string, yidToMatch: string) {
    // Close existing connection only if it's not already open/connecting
    if (this.wsConnection) {
      const state = this.wsConnection.readyState
      // Only close if it's not already open or connecting
      if (state !== WebSocket.OPEN && state !== WebSocket.CONNECTING) {
        this.wsConnection.close()
      } else {
        // Already have a good connection, don't create a new one
        return
      }
    }

    const GATE_URL = 'wss://zanshin.fly.dev/confirmed'
    const wsYatori = new WebSocket(GATE_URL)
    this.wsConnection = wsYatori

    wsYatori.addEventListener('open', () => {
      this.connected = true
      const payload = { address: walletAddress, yid: yidToMatch }
      wsYatori.send(JSON.stringify(payload))
    })

    wsYatori.addEventListener('message', (data) => {
      const parsedData = JSON.parse(data.data)

      if (parsedData.status === 'confirmed') {
        // Dispatch event to bubble up the confirmation
        this.dispatchEvent(
          new CustomEvent('yatori-confirmed', {
            detail: {
              signature: parsedData.signature,
              status: parsedData.status,
            },
            bubbles: true,
            composed: true,
          })
        )

        // Fade QR out
        const qrEl = this.renderRoot.querySelector('.qr-wrapper')
        if (qrEl) qrEl.classList.add('fade-out')

        setTimeout(() => {
          this.confirmed = true
          // Close dialog if it's open
          if (this.dialogOpen) {
            this.dialogOpen = false
          }

          // After 5 seconds of showing the animation, dispatch event to allow parent to hide
          setTimeout(() => {
            this.dispatchEvent(
              new CustomEvent('yatori-animation-complete', {
                detail: {
                  signature: parsedData.signature,
                  status: parsedData.status,
                },
                bubbles: true,
                composed: true,
              })
            )
          }, 5000) // 5 seconds after animation starts
        }, 500)
      }
    })

    wsYatori.addEventListener('error', (err) => {
      console.error('WebSocket error:', err)
      this.connected = false
    })

    wsYatori.addEventListener('close', () => {
      console.log('Disconnected from proxy')
      this.connected = false
      this.wsConnection = null
    })
  }

  render() {
    // Show error if amount is invalid
    if (this.amountError) {
      return html`
        <div class="error-container">
          <svg class="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <circle cx="12" cy="16" r="0.5" fill="currentColor"></circle>
          </svg>
          <div class="error-message">${this.amountError}</div>
          <div class="error-details">
            Please adjust the payment amount to continue.
          </div>
        </div>
      `
    }

    // Show spinner only when useDialog is false and we're loading (not connected, not confirmed, QR not ready)
    const showSpinner = !this.useDialog && !this.connected && !this.confirmed && !this.qrCodeData

    return html`
      ${showSpinner
        ? html`<div class="spinner"></div>`
        : this.confirmed
          ? html`
            <div class="confirmed">
              <svg viewBox="0 0 100 100" style="shape-rendering: geometricPrecision;">
                <defs>
                  <linearGradient id="checkmark-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#977DCD;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#7DB6C1;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#checkmark-gradient)" stroke-width="4.5" class="animate-draw-circle"/>
                <path d="M 30 50 L 45 65 L 75 30" fill="none" stroke="url(#checkmark-gradient)" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" class="checkmark-path" style="stroke-dasharray: 55; stroke-dashoffset: 55;"/>
              </svg>
              <div class="confirmed-text">Payment Complete</div>
            </div>
          `
          : html`
            ${this.isMobile
              ? html`
                  <button
                    class="deeplink-btn"
                    @click=${() => {
                  this.startWebSocketConnection()
                  window.location.href = this.qrUrl
                }}
                  >
                    <img src="${yatoriLogo}" alt="Yatori Logo" />
                    YATORI PAY
                  </button>
                `
              : this.useDialog
                ? html`
                    <button
                      class="deeplink-btn"
                      @click=${() => {
                    this.dialogOpen = true
                  }}
                    >
                      <img src="${yatoriLogo}" alt="Yatori Logo" />
                      YATORI PAY
                    </button>
                    ${this.dialogOpen ? html`
                      <div class="dialog-overlay" @click=${(e: MouseEvent) => {
                      if (e.target === e.currentTarget) {
                        this.dialogOpen = false
                      }
                    }}>
                        <div class="dialog-content">
                          <div class="qr-wrapper">
                            <div class="qr-header">
                              <img src="${yatoriLogo}" alt="Yatori Logo" />
                              YATORI PAY
                            </div>
                            ${this.qrCodeData
                      ? html`<img src="${this.qrCodeData}" alt="Yatori QR Code" />`
                      : html`<p>Loading QR…</p>`}
                            <div class="qr-details">
                              <div class="qr-amount">
                                $${this.amount}
                                <img src="${usdcLogo}" alt="USDC" />
                              </div>
                              <div class="qr-wallet">${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>
                            </div>
                          </div>
                          <button
                            class="dialog-close-btn"
                            @click=${() => this.dialogOpen = false}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    ` : ''}
                  `
                : html`
                  <div class="qr-wrapper">
                    <div class="qr-header">
                      <img src="${yatoriLogo}" alt="Yatori Logo" />
                      YATORI PAY
                    </div>
                    ${this.qrCodeData
                    ? html`<img src="${this.qrCodeData}" alt="Yatori QR Code" />`
                    : html`<p>Loading QR…</p>`}
                    <div class="qr-details">
                      <div class="qr-amount">
                        $${this.amount}
                        <img src="${usdcLogo}" alt="USDC" />
                      </div>
                      <div class="qr-wallet">${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>
                    </div>
                  </div>
                `}
          `}
    `
  }
}