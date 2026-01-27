import { getAllTags } from '$lib/services/tag';

export const load = async () => {
	const tagsData = await getAllTags();

	return { tags: tagsData };
};
