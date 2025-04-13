import { defineConfig } from 'vite'

export default defineConfig({
    root: '.',
    publicDir: 'public',
    build: {
        outDir: 'dist', // where Vercel will look
        emptyOutDir: true,
    },
})
