import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import QRCodeStyling from 'qr-code-styling'
// Import USDC logo - will be bundled inline as base64 (not tamperable)
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

  isMobileDevice(): boolean {
    return /android|iphone|ipad|ipod/i.test(navigator.userAgent)
  }

  static styles = css`
  :host {
    display: flex-column;
 
    padding: 16px;
    text-align: center;
    max-width: 240px;
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
    background-color: #ffffff;
    border-radius: 20px;
    padding: 12px 16px;
    display: inline-block;
    margin-top: 16px;
  }

  .qr-wrapper img {
    margin: 0;
    display: block;
  }

  .qr-wrapper.fade-out {
    opacity: 0;
  }

  .confirmed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 24px auto;
    gap: 16px;
  }

  .confirmed svg {
    width: 56px;
    height: 56px;
  }

  .confirmed-text {
    font-size: 18px;
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
  `

  async firstUpdated() {
    this.isMobile = this.isMobileDevice()
    await this.generateQRCode()
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

    // Generate QR code with Yatori-branded USDC logo using qr-code-styling
    const qrCodeOptions: any = {
      width: 300,
      height: 300,
      data: this.qrUrl,
      image: usdcLogo, // USDC logo bundled inline (not tamperable)
      dotsOptions: {
        color: '#000000',
        type: 'dots'
      },
      backgroundOptions: {
        color: '#ffffff'
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 10
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
              status: parsedData.status,
              yid: parsedData.yid,
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
                    ${this.qrCodeData
                  ? html`<img src="${this.qrCodeData}" alt="Yatori QR Code" />`
                  : html`<p>Loading QR…</p>`}
                  </div>
                `}
          `}
    `
  }
}
