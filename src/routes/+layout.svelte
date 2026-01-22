<script lang="ts">
	import { Header } from '$lib/components/header';
	import favicon from '$lib/assets/images/favicon.svg';
	import '../styles/app.css';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header contentData={data.header} />
<main>
	{@render children()}
</main>
