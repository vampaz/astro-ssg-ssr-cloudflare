import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import AstroConfigBase from './astro.config.base.mjs'

// https://astro.build/config
export default defineConfig({
	site: AstroConfigBase.site,
	integrations: [vue()],
	srcDir: './src/ssr',
	output: 'server',
	adapter: cloudflare({ mode: 'directory' }),
	outDir: './dist-ssr',
})
