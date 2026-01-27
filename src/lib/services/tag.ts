import { GET_ALL_TAGS } from '$lib/graphql/queries';
import { client } from '$lib/graphql/client';
import { type TagItem } from '$lib/types/tag';

export const getAllTags = async (): Promise<TagItem[]> => {
	const data = await client.request(GET_ALL_TAGS);

	return data.tags;
};
