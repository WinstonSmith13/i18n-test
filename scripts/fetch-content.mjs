import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { ContentGenerator } from '@poulpus/content-generator/dist/main.js'
(async () => {
  const { NUXT_ENV_API_BASE_URL, NUXT_ENV_API_TOKEN } = process.env
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = resolve(__filename, '../..', './content/fr')
  const contentGenerator = new ContentGenerator(__dirname, {
    baseURL: NUXT_ENV_API_BASE_URL,
    token: NUXT_ENV_API_TOKEN
  })
  await contentGenerator.generateContent()
})()
