<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	import { ROUTES } from '$lib/constants/routes';
	import { type HeaderContent } from '$lib/types/header';
	import { getImageUrl } from '$lib/utils/common';

	import('./header.css');

	interface HeaderProps {
		contentData: HeaderContent;
	}

	let { contentData }: HeaderProps = $props();
	const {
		branding: { logoImage, logoTitle },
		navigation
	} = $derived(contentData);
</script>

<header class="header">
	<a class="homeLink" href={resolve(ROUTES.home)}>
		<img src={getImageUrl(logoImage.url)} alt={logoImage.altText} width="40" />
		{logoTitle}
	</a>
	<nav class="navigation">
		{#each navigation as { link, title, id } (id)}
			{@const isActive = page.url.pathname === link}
			<a href={resolve(link)} class="navLink" class:active={isActive}>{title}</a>
		{/each}
	</nav>
</header>
