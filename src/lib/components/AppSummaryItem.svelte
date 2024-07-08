<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';

	export let id: string;
	export let name: string;
	export let detailLink: string | undefined = undefined;
	export let downloadLink: string | undefined = undefined;
</script>

<div {id}>
	<SectionHeader>{name}</SectionHeader>
	<div
		class={$$slots.thumbnail
			? 'flex flex-col lg:flex-row lg:justify-between lg:space-x-4'
			: undefined}
	>
		<slot name="thumbnail"></slot>
		<div class="{$$slots.thumbnail ? 'flex-shrink ' : ''}flex flex-col justify-between">
			<slot></slot>
			{#if detailLink || downloadLink}
				<div class="flex justify-end">
					{#if detailLink}
						<div class="flex flex-col justify-center">
							<a href={detailLink} target="_blank">詳細はこちら</a>
						</div>
					{/if}
					{#if downloadLink}
						<a
							class="m-5 rounded-md bg-green-700 px-6 py-3 text-white visited:text-white hover:bg-green-800 hover:no-underline"
							href={downloadLink}
							target="_blank">ダウンロード</a
						>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>
