import { defineConfig } from 'astro/config'
import { site, server, integrations } from './astro.config.base.mjs'

export default defineConfig({
	site,
	srcDir: './src/ssg',
	server,
	integrations,
})
