interface Branding {
	logoTitle: string;
	logoImage: {
		url: string;
		altText: string;
	};
}

interface NavigationItem {
	id: string;
	link: '/';
	title: string;
}

export interface HeaderContent {
	branding: Branding;
	navigation: NavigationItem[];
}
