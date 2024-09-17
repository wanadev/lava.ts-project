import { defineConfig } from "vitest/config"
import { fileURLToPath } from "url"

export default defineConfig({
    test: {
        setupFiles: [
            fileURLToPath(new URL('./tests/setup.ts', import.meta.url)),
        ],
    },
})