<script lang="ts">
	import globalConfig from '$lib/globalConfig';

	export let title: string;
	export let description: string;
</script>

<svelte:head>
	<title>{title} - {globalConfig.siteTitle}</title>
	<meta name="description" content={description} />
</svelte:head>
