// https://developers.cloudflare.com/pages/platform/functions/get-started/
export async function onRequestGet(context) {
	const { request } = context

	const IP = request.headers.get('CF-Connecting-IP')

	return new Response(JSON.stringify({ IP, ...request }, null, 2), {
		headers: { 'content-type': 'application/json' },
	})
}
