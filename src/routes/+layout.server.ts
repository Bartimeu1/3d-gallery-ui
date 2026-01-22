import { getHeaderData } from '$lib/services/header';
import { getFooterData } from '$lib/services/footer';

export async function load() {
	const headerData = await getHeaderData();
	const FooterData = await getFooterData();

	return { header: headerData, footer: FooterData };
}
