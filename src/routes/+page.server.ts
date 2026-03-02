import { getAllTags } from '$lib/services/tag';
import { getArts } from '$lib/services/art';
import { getHomeData } from '$lib/services/home';
import { URL_PARAMS } from '$lib/constants/routes';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const selectedTags = url.searchParams.get(URL_PARAMS.tags)?.split(',') ?? [];

	const homeData = await getHomeData();
	const tagsData = await getAllTags();
	const artsData = await getArts(selectedTags);

	return { content: homeData, tags: tagsData, arts: artsData };
};
