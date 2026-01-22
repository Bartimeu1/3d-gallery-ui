<script lang="ts">
	import type { FooterContent } from '$lib/types/footer';
	import './footer.css';

	interface FooterProps {
		contentData: FooterContent;
	}

	let { contentData }: FooterProps = $props();
</script>

<footer class="footer">
	<h3 class="copyright">
		{contentData.copyright}
	</h3>
</footer>
