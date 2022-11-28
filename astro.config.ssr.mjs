import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import { site, server, integrations } from './astro.config.base.mjs'

export default defineConfig({
	site,
	server,
	integrations,
	srcDir: './src/ssr',
	output: 'server',
	adapter: cloudflare({ mode: 'directory' }),
	outDir: './dist-ssr',
})
