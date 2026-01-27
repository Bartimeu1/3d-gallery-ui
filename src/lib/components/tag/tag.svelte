<script lang="ts">
	import { page } from '$app/state';

	import { URL_PARAMS } from '$lib/constants/routes';

	import './tag.css';

	interface TagProps {
		slug: string;
		label: string;
		onClick: (slug: string) => () => void;
	}

	const { slug, label, onClick }: TagProps = $props();

	const isSelected = $derived.by(() => {
		const selectedTags = page.url.searchParams.get(URL_PARAMS.tags)?.split(',') ?? [];

		return selectedTags.includes(slug);
	});
</script>

<button onclick={onClick(slug)} class="tag" class:selected={isSelected}>{label}</button>
