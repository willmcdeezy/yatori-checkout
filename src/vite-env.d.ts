/// <reference types="vite/client" />

// PNG images are inlined as base64 data URLs (bundled in JS, not tamperable)
declare module '*.png' {
    const value: string
    export default value
}

declare module '*.png?inline' {
    const value: string
    export default value
}

declare module 'qr-code-styling' {
    export interface QRCodeStylingOptions {
        width?: number
        height?: number
        data: string
        image?: string
        dotsOptions?: {
            color?: string
            type?: 'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'square' | 'extra-rounded'
        }
        backgroundOptions?: {
            color?: string
        }
        imageOptions?: {
            crossOrigin?: string
            margin?: number
        }
        cornersSquareOptions?: {
            type?: 'square' | 'extra-rounded' | 'dot'
        }
        cornersDotOptions?: {
            type?: 'square' | 'dot'
        }
    }

    export default class QRCodeStyling {
        constructor(options: QRCodeStylingOptions)
        getRawData(type?: 'png' | 'svg'): Promise<Blob | null>
        append(container: HTMLElement): void
    }
}

