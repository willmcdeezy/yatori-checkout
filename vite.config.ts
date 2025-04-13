import { defineConfig } from 'vite'

export default defineConfig({
    root: '.',
    build: {
        lib: {
            entry: 'src/components/yatori-pay.ts',
            name: 'YatoriPay',
            fileName: 'yatori-pay',
            formats: ['es'],
        },
    },
    publicDir: 'public'
})