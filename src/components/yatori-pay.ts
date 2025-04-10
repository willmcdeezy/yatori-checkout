import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import QRCode from 'qrcode'

@customElement('yatori-pay')
export class YatoriPay extends LitElement {
  @property({ type: String }) wallet = ''
  @property({ type: Number }) amount = 0

  @state() qrCodeData: string = ''
  @state() yid: string = ''
  @state() confirmed = false

  static styles = css`
  :host {
    display: block;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 16px;
    text-align: center;
    max-width: 240px;
    font-family: sans-serif;
    box-sizing: border-box;
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
  `

  async firstUpdated() {
    const generateShortId = (): string => {
      const timestamp = Date.now().toString().slice(-4)
      const random = Math.random().toString(36).substring(2, 6)
      return `${timestamp}${random}`
    }

    const encryptData = (text: string): string => {
      const key = '' // TODO PUBLIC KEY
      return btoa(key + text) + '_yatori'
    }

    const encryptQRData = (data: object): string => {
      return encryptData(JSON.stringify(data))
    }

    this.yid = generateShortId()

    const snakeEater = {
      token: 'usdcBasic',
      to: this.wallet,
      amount: this.amount,
      yid: this.yid,
    }

    const venomSnake = encryptQRData(snakeEater)

    const qrUrl = `https://yatori.io/mobile/yatoriRequest?amount=${this.amount}&solidSnake=${this.wallet}&liquidSnake=${encodeURIComponent(
      venomSnake
    )}`

    this.qrCodeData = await QRCode.toDataURL(qrUrl)

    this.setupYatoriWebSocket(this.wallet, this.yid)
  }

  setupYatoriWebSocket(walletAddress: string, yidToMatch: string) {
    const GATE_URL = 'ws://localhost:3001'
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

      <div class="qr-wrapper ${this.confirmed ? 'fade-out' : ''}">
        ${this.qrCodeData
        ? html`<img src="${this.qrCodeData}" alt="Yatori QR Code" />`
        : html`<p>Loading QR…</p>`}
      </div>

      <div class="confirmed ${this.confirmed ? 'show' : ''}">
        ✅ Payment Confirmed
      </div>
    `
  }
}
