<script lang="ts">
	import { type ArtItem } from '$lib/types/art';
	import { getImageUrl } from '$lib/utils/common';
	import { ROUTES } from '$lib/constants/routes';

	import './art-item.css';

	const { slug, title, previewImage, description }: ArtItem = $props();
	const artImageUrl = $derived(getImageUrl(previewImage.url));
</script>

<article class="artItem">
	<a href={`${ROUTES.art}/${slug}`} class="artLink" aria-label={`art-link-${title}`}></a>
	<div class="artImageContainer">
		<img class="artImage" src={artImageUrl} alt={`art-image-${title}`} />
	</div>
	<h3 class="artTitle">
		{title}
	</h3>
	<p class="artDesc">{description}</p>
</article>
