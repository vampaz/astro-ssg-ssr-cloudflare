// https://developers.cloudflare.com/pages/platform/functions/get-started/
export async function onRequestGet(context) {
	const { request } = context

	const IP = request.headers.get('CF-Connecting-IP')

	const { cf } = request

	return new Response(JSON.stringify({ IP, cf }, null, 2), {
		headers: { 'content-type': 'application/json' },
	})
}
