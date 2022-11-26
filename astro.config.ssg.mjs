import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import AstroConfigBase from './astro.config.base.mjs'

// https://astro.build/config
export default defineConfig({
	site: AstroConfigBase.site,
	srcDir: './src/ssg',
	server: {
		port: 4000,
		host: 'localhost',
	},
	integrations: [vue()],
	// vite: {
	// 	plugins: [],
	// 	server: {
	// 		hmr: {
	// 			clientPort: 443,
	// 		},
	// 	},
	// },
})
