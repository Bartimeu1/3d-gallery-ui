import { GET_HEADER_DATA } from '$lib/graphql/queries';
import { client } from '$lib/graphql/client';
import { type HeaderContent } from '$lib/types/header';

export const getHeaderData = async (): Promise<HeaderContent> => {
	const data = await client.request(GET_HEADER_DATA);

	return data.header;
};
