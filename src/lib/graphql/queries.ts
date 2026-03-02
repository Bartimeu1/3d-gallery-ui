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

export const GET_HOME_DATA = gql`
	query {
		home {
			emptyArtsListText
			emptyArtsListImage {
				url
				alternativeText
			}
		}
	}
`;

export const GET_ALL_TAGS = gql`
	query {
		tags {
			slug
			label
		}
	}
`;

export const GET_ARTS_BY_FILTERS = gql`
	query ArtsByFilters($filters: ArtFiltersInput) {
		arts(filters: $filters) {
			slug
			title
			description
			previewImage {
				url
			}
		}
	}
`;
