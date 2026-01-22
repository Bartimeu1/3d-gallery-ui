import * as queries from '$lib/graphql/queries';
import { client } from '$lib/graphql/client';
import { type HeaderContent } from '$lib/types/header';

export const getHeaderData = async (): Promise<HeaderContent> => {
	const data = await client.request(queries.GET_HEADER_DATA);

	return data.header;
};
