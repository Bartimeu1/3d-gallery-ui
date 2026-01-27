<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	import { Tag } from '$lib/components/tag';
	import { ROUTES, URL_PARAMS } from '$lib/constants/routes';

	import './page.css';

	const { data } = $props();
	const { tags } = $derived(data);

	const handleTagToggle = (tag: string) => () => {
		const selectedTags = page.url.searchParams.get(URL_PARAMS.tags)?.split(',') ?? [];

		const tags = selectedTags.includes(tag)
			? selectedTags.filter((t) => t !== tag)
			: [...selectedTags, tag];

		const query = tags.length ? `?tags=${tags.join(',')}` : ROUTES.home;

		goto(query);
	};
</script>

<div class="tagsWrapper">
	<div class="tagsList">
		{#each tags as { slug, label } (slug)}
			<Tag {slug} {label} onClick={handleTagToggle} />
		{/each}
	</div>
</div>
