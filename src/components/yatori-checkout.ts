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
  @state() yid: string = ''
  @state() confirmed = false
  @state() isMobile = false

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
    font-size: 18px;
    color: green;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
  }

  .confirmed.show {
    opacity: 1;
  }

.deeplink-btn {
  background-color: #1c1c1c;
  color: white;
  border: 4px solid white;
  border-radius: 30px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600; /* semi-bold */
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.25s ease;
  margin-top: 16px;
}

.deeplink-btn:hover {
  opacity: 0.9;
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

    const qrUrl = `https://yatori.io/mobile/yatoriRequest?token=${snakeEater.token}&to=${snakeEater.to}&amount=${snakeEater.amount}&yid=${snakeEater.yid}`

    // Generate QR code with Yatori-branded USDC logo using qr-code-styling
    const qrCodeOptions: any = {
      width: 300,
      height: 300,
      data: qrUrl,
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
        margin: 20
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

    // this.setupYatoriWebSocket(this.wallet, this.yid)
  }

  setupYatoriWebSocket(walletAddress: string, yidToMatch: string) {
    const GATE_URL = 'ws://localhost:8080'
    const wsYatori = new WebSocket(GATE_URL)

    wsYatori.addEventListener('open', () => {
      const payload = { address: walletAddress, yid: yidToMatch }
      wsYatori.send(JSON.stringify(payload))
    })

    wsYatori.addEventListener('message', (data) => {
      const parsedData = JSON.parse(data.data)

      if (parsedData.type === 'yidMatch') {
        // Fade QR out
        const qrEl = this.renderRoot.querySelector('.qr-wrapper')
        if (qrEl) qrEl.classList.add('fade-out')

        setTimeout(() => {
          this.confirmed = true
        }, 500)

        this.dispatchEvent(
          new CustomEvent('yatori-signed', {
            detail: {
              signature: parsedData.signature,
              yid: parsedData.yid,
              timestamp: parsedData.ts,
            },
            bubbles: true,
            composed: true,
          })
        )
      }
    })

    wsYatori.addEventListener('error', (err) => {
      console.error('WebSocket error:', err)
    })

    wsYatori.addEventListener('close', () => {
      console.log('Disconnected from proxy')
    })
  }

  render() {
    return html`
      <div>Pay ${this.amount} USDC</div>
      <div>To: ${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}</div>

      ${this.isMobile
        ? html`
            <button
              class="deeplink-btn"
              @click=${() => window.location.href = this.qrCodeData}
            >
              Yatori Pay
            </button>
          `
        : html`
            <div class="qr-wrapper ${this.confirmed ? 'fade-out' : ''}">
              ${this.qrCodeData
            ? html`<img src="${this.qrCodeData}" alt="Yatori QR Code" />`
            : html`<p>Loading QR…</p>`}
            </div>
          `}
      
      

      <div class="confirmed ${this.confirmed ? 'show' : ''}">
        ✅ Payment Confirmed
      </div>
    `
  }
}
