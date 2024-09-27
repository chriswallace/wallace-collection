import prisma from '$lib/prisma';

export async function GET() {
	try {
		const collections = await prisma.collection.findMany({
			orderBy: {
				title: 'asc' // Sorts by title in ascending order
			}
		});

		return new Response(
			JSON.stringify({
				collections: collections
			}),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	} catch (error) {
		console.error('Error in GET request:', (error as Error).message);
		return new Response(JSON.stringify({ error: 'An error occurred' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
