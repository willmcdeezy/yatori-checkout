import { defineConfig } from 'vite'

export default defineConfig({
    root: '.',
    publicDir: 'public',
    build: {
        outDir: 'dist', // where Vercel will look
        emptyOutDir: true,
        assetsInlineLimit: 40960, // Inline assets up to 40KB (ensures logo is inlined as base64)
    },
})
