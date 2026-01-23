# Yatori Checkout

[![npm version](https://img.shields.io/npm/v/yatori-checkout.svg)](https://www.npmjs.com/package/yatori-checkout)
[![License](https://img.shields.io/github/license/willmcdeezy/yatori-checkout)](https://github.com/willmcdeezy/yatori-checkout/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/yatori-checkout.svg)](https://www.npmjs.com/package/yatori-checkout)


A web component for seamless USDC stablecoin payments on Solana with QR code checkout and WebSocket confirmation. Learn more at [Yatori Checkout](https://yatori.io/yatori-checkout)

## Screenshots

![Desktop QR Code Checkout](./screenshots/desktop-qr-code.png)

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
import "./App.css";
import { YatoriCheckout } from "yatori-checkout/react";

function App() {
  return (
    <>
      <div>
        <YatoriCheckout
          wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
            amount={0.01}
        />
      </div>
    </>
  );
}

export default App;
```

## Next.js Example

When using in a Next.js application, use dynamic import to ensure client-side rendering:
```tsx
"use client";

import dynamic from "next/dynamic";

const YatoriCheckout = dynamic(
  () => import("yatori-checkout/react").then((mod) => mod.YatoriCheckout),
  {
    ssr: false,
    loading: () => (
      <div className="w-full flex justify-center items-center h-[300px]">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded w-48"></div>
        </div>
      </div>
    ),
  }
);

export default function MyYatoriCheckout() {
  return (
    <YatoriCheckout
      wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
      amount={10}
      onYatoriConfirmed={(event) => {
        console.log("Payment confirmed", event.detail);
      }}
      onYatoriAnimationComplete={(event) => {
        console.log("Animation complete", event.detail);
      }}
    />
  );
}
```

## Props/Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `wallet` | string | Yes | Recipient wallet address (Solana). Must have at least 0.01 USDC already deposited for rent (USDC PDA). |
| `amount` | number | Yes | Payment amount in USD decimal format (e.g., 9.99, must be between 0.01 and 9999.99) |

## Events

### `yatori-confirmed`

Fired when payment is confirmed via WebSocket.
```javascript
element.addEventListener('yatori-confirmed', (event) => {
  const { signature, status, confirmed } = event.detail
  // Handle payment confirmation
})
```

### `yatori-animation-complete`

Fired 5 seconds after payment confirmation, when the payment complete animation finishes. This is useful for hiding the component or updating UI after the animation completes.
```javascript
element.addEventListener('yatori-animation-complete', (event) => {
  const { signature, status } = event.detail
  // Animation is complete, component can be hidden or UI updated
})
```

## Features

- ✅ QR code generation with Yatori branding
- ✅ WebSocket payment confirmation
- ✅ Mobile responsive: On mobile devices, displays "Yatori Pay" button with secure deeplink functionality to [YATORI PAY](https://yatori.io/yatori-pay)
- ✅ Amount validation (max 9999.99)
- ✅ Beautiful payment complete animation
- ✅ Works in any framework (Vue, React, vanilla JS, etc.)

## Payment Method

Payable with the **YATORI PAY** mobile app. Available for download on the [Apple App Store](https://apps.apple.com/us/app/yatori-pay/id6736435772) or [Google Play Store](https://play.google.com/store/apps/details?id=io.yatori.app). More info: [https://yatori.io/yatori-pay](https://yatori.io/yatori-pay)

## License

MIT

## Links

- [Yatori](https://yatori.io)

- [Checkout YouTube Demo](https://www.youtube.com/watch?v=55-TJJdhLAo)