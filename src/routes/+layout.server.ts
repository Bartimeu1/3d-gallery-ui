import { getHeaderData } from '$lib/services/header';

export async function load() {
	const headerData = await getHeaderData();

	return { header: headerData };
}
