<script lang="ts">
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	export let galleryId: string;
	export let images: {
		href: string;
		url: string;
		width: number;
		height: number;
		alt?: string;
	}[];
	export let thumbnailClass: string = '';

	onMount(() => {
		const lightbox = new PhotoSwipeLightbox({
			gallery: `#psl-${galleryId}`,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
</script>

<div class="pswp-gallery flex flex-grow justify-center space-x-2" id="psl-{galleryId}">
	{#each images as image}
		<a
			href={image.href}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
		>
			<img src={image.url} alt={image.alt} class={thumbnailClass} />
		</a>
	{/each}
</div>
