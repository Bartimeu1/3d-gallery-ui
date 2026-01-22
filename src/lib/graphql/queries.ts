import { gql } from 'graphql-request';

export const GET_HEADER_DATA = gql`
	query {
		header {
			branding {
				logoTitle
				logoImage {
					url
					alternativeText
				}
			}

			navigation {
				id
				link
				title
			}
		}
	}
`;
