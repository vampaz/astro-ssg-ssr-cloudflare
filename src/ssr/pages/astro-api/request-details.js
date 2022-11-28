export async function get({ params, request }) {
	const IP = request.headers.get('CF-Connecting-IP')

	const { cf } = request

	return new Response(JSON.stringify({ IP, cf }, null, 2), {
		headers: { 'content-type': 'application/json' },
	})
}
