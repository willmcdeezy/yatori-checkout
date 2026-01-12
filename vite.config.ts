import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'YatoriCheckout',
            fileName: (format) => `yatori-checkout.${format}.js`,
            formats: ['es', 'umd']
        },
        rollupOptions: {
            // Externalize peer dependencies and dependencies that shouldn't be bundled
            external: ['lit'],
            output: {
                globals: {
                    lit: 'Lit'
                },
                assetFileNames: 'assets/[name][extname]'
            }
        },
        outDir: 'dist',
        emptyOutDir: true,
        assetsInlineLimit: 40960, // Inline assets up to 40KB (ensures logo is inlined as base64)
    },
})
