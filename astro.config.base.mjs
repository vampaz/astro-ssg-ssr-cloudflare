import vue from '@astrojs/vue'

const config = {
	site: 'https://astro.conekto.eu',
	server: {
		port: 3000,
		host: 'localhost',
	},
	integrations: [vue()],
}

export const site = config.site,
	server = config.server,
	integrations = config.integrations
