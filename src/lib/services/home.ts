import { GET_HOME_DATA } from '$lib/graphql/queries';
import { client } from '$lib/graphql/client';
import { type HomeContent } from '$lib/types/home';

export const getHomeData = async (): Promise<HomeContent> => {
	const data = await client.request(GET_HOME_DATA);

	return data.home;
};
