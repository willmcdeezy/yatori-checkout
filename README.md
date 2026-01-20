# yatori-checkout

A web component for seamless USDC stablecoin payments on Solana with QR code checkout and WebSocket confirmation.

## Installation

```bash
npm install yatori-checkout
```

## Quick Start

```javascript
import 'yatori-checkout'
```

```html
<yatori-checkout
  wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
  amount="9.99"
></yatori-checkout>
```

> **Important:** The recipient wallet address must have at least 0.01 USDC already deposited for rent (USDC PDA on Solana).

## Vanilla HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yatori Checkout Example</title>
</head>
<body>
  <h1>Payment Checkout</h1>
  
  <yatori-checkout
    wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
    amount="9.99"
  ></yatori-checkout>

  <script type="module">
    import 'yatori-checkout'
    
    const checkout = document.querySelector('yatori-checkout')
    checkout.addEventListener('yatori-confirmed', (event) => {
      console.log('Payment confirmed!', event.detail)
      // event.detail contains: { signature, status, confirmed }
      alert('Payment successful!')
    })
  </script>
</body>
</html>
```

## Vue.js Example

First, configure Vue to recognize `yatori-checkout` as a custom element in your `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('yatori-')
        }
      }
    })
  ]
})
```

Then use it in your component:

```vue
<template>
  <yatori-checkout
    wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
    amount="9.99"
    @yatori-confirmed="handlePayment"
  ></yatori-checkout>
</template>

<script setup>
import 'yatori-checkout'

function handlePayment(event) {
  console.log('Payment confirmed!', event.detail)
  // event.detail contains: { signature, status, confirmed }
}
</script>
```

## React Example

```tsx
import React, { useRef } from 'react'
import 'yatori-checkout'

function CheckoutPage() {
  const checkoutRef = useRef<HTMLElement>(null)

  const handlePayment = (event: CustomEvent) => {
    console.log('Payment confirmed!', event.detail)
    // event.detail contains: { signature, status, confirmed }
  }

  React.useEffect(() => {
    const element = checkoutRef.current
    if (element) {
      element.addEventListener('yatori-confirmed', handlePayment as EventListener)
      return () => {
        element.removeEventListener('yatori-confirmed', handlePayment as EventListener)
      }
    }
  }, [])

  return (
    <yatori-checkout
      ref={checkoutRef}
      wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
      amount="9.99"
    />
  )
}

export default CheckoutPage
```

Or with TypeScript and proper typing:

```tsx
import React, { useEffect, useRef } from 'react'
import 'yatori-checkout'
import type { YatoriCheckoutElement, YatoriConfirmedEventDetail } from 'yatori-checkout'

function CheckoutPage() {
  const checkoutRef = useRef<YatoriCheckoutElement>(null)

  useEffect(() => {
    const element = checkoutRef.current
    if (!element) return

    const handlePayment = (event: CustomEvent<YatoriConfirmedEventDetail>) => {
      console.log('Payment confirmed!', event.detail)
    }

    element.addEventListener('yatori-confirmed', handlePayment as EventListener)
    return () => {
      element.removeEventListener('yatori-confirmed', handlePayment as EventListener)
    }
  }, [])

  return (
    <yatori-checkout
      ref={checkoutRef}
      wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
      amount="9.99"
    />
  )
}

export default CheckoutPage
```

## Props/Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `wallet` | string | Yes | Recipient wallet address (Solana). Must have at least 0.01 USDC already deposited for rent (USDC PDA). |
| `amount` | string | Yes | Payment amount in USD decimal format (e.g., "9.99", must be between "0.01" and "9999.99") |

## Events

### `yatori-confirmed`

Fired when payment is confirmed via WebSocket.

```javascript
element.addEventListener('yatori-confirmed', (event) => {
  const { signature, status, confirmed } = event.detail
  // Handle payment confirmation
})
```

## Features

- ✅ QR code generation with Yatori branding
- ✅ WebSocket payment confirmation
- ✅ Mobile responsive: On mobile devices, displays "Yatori Pay" button with secure deeplink functionality to YATORI PAY mobile app
- ✅ Amount validation (max 9999.99)
- ✅ Beautiful payment complete animation
- ✅ Works in any framework (Vue, React, vanilla JS, etc.)

## Payment Method

Payable with the **YATORI PAY** mobile app. Available for download on the [Apple App Store](https://apps.apple.com/us/app/yatori-pay/id6736435772) or [Google Play Store](https://play.google.com/store/apps/details?id=io.yatori.app). More info: [https://yatori.io/yatori-pay](https://yatori.io/yatori-pay)

## License

MIT

## Links

- [Yatori](https://yatori.io)
