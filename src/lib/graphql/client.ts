import { GraphQLClient } from 'graphql-request';
import { PUBLIC_STRAPI_HOST } from '$env/static/public';
import { STRAPI_API_TOKEN } from '$env/static/private';

export const client = new GraphQLClient(`${PUBLIC_STRAPI_HOST}/graphql`, {
	headers: {
		Authorization: `Bearer ${STRAPI_API_TOKEN}`
	}
});
