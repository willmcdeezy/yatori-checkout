import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import QRCodeStyling from 'qr-code-styling'
// Import Yatori Blocks logo - will be bundled inline as base64 (not tamperable)
import yatoriLogo from '../assets/yatori-blocks-logo.png'
import usdcLogo from '../assets/USDC-logo.png'

@customElement('yatori-checkout')
export class YatoriCheckout extends LitElement {
  @property({ type: String }) wallet = ''
  @property({ type: Number }) amount = 0

  @state() qrCodeData: string = ''
  @state() qrUrl: string = ''
  @state() yid: string = ''
  @state() confirmed = false
  @state() isMobile = false
  @state() connected = false
  @state() amountError: string = ''

  private hasInitialized = false

  isMobileDevice(): boolean {
    return /android|iphone|ipad|ipod/i.test(navigator.userAgent)
  }

  validateAmount(): boolean {
    if (this.amount > 9999.99) {
      this.amountError = 'Amount cannot exceed $9,999.99'
      return false
    }
    if (this.amount <= 0) {
      this.amountError = 'Amount must be greater than $0'
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
    font-family: monospace;
    font-size: 8px;
    color: #6b7280;
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
  background: linear-gradient(to bottom right, #977DCD, #7DB6C1);
  color: white;
  border: none;
  border-radius: 9999px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: 16px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
}

.deeplink-btn:hover {
  opacity: 0.9;
}

.deeplink-btn:active {
  background: linear-gradient(to bottom right, #977DCD, #7DB6C1);
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
      return // Don't generate QR if amount is invalid
    }

    await this.generateQRCode()
    this.hasInitialized = true
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
  }

  async generateQRCode() {
    const generateShortId = (): string => {
      const timestamp = Date.now().toString().slice(-4)
      const random = Math.random().toString(36).substring(2, 6)
      return `${timestamp}${random}`
    }

    this.yid = generateShortId()
    console.log('YID:', this.yid)

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

    this.setupYatoriWebSocket(this.wallet, this.yid)
  }

  setupYatoriWebSocket(walletAddress: string, yidToMatch: string) {
    const GATE_URL = 'wss://zanshin.fly.dev/confirmed'
    const wsYatori = new WebSocket(GATE_URL)

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
              confirmed: true,
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

    return html`
      ${!this.connected && !this.confirmed
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
                    @click=${() => window.location.href = this.qrUrl}
                  >
                    Yatori Pay
                  </button>
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
                      $${this.amount.toFixed(2)}
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