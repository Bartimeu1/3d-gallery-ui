import { GET_FOOTER_DATA } from '$lib/graphql/queries';
import { client } from '$lib/graphql/client';
import { type FooterContent } from '$lib/types/footer';

export const getFooterData = async (): Promise<FooterContent> => {
	const data = await client.request(GET_FOOTER_DATA);

	return data.footer;
};
