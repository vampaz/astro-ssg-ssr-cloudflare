export async function get({ params, request }) {
	const IP = request.headers.get('CF-Connecting-IP')

	return new Response(JSON.stringify({ IP, request }, null, 2), {
		headers: { 'content-type': 'application/json' },
	})
}
