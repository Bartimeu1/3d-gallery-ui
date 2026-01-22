import { PUBLIC_STRAPI_HOST } from '$env/static/public';

export const getImageUrl = (relativeUrl: string | null) => {
	if (!relativeUrl) {
		return null;
	}
	return `${PUBLIC_STRAPI_HOST}${relativeUrl}`;
};
