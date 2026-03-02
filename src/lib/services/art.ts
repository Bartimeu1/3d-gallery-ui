import { GET_ARTS_BY_FILTERS } from '$lib/graphql/queries';
import { client } from '$lib/graphql/client';
import type { ArtItem } from '$lib/types/art';

export const getArts = async (tags: string[]): Promise<ArtItem[]> => {
	const filters = tags.length
		? {
				and: tags.map((tag) => ({
					tags: { slug: { eq: tag } }
				}))
			}
		: {};

	const data = await client.request(GET_ARTS_BY_FILTERS, { filters });

	return data.arts;
};
