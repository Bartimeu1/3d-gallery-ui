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

export const GET_FOOTER_DATA = gql`
	query {
		footer {
			copyright
		}
	}
`;
