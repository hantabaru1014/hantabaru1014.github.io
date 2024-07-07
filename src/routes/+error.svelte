<script lang="ts">
	import { page } from '$app/stores';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<div>
	{#if $page.status === 404}
		<SectionHeader title="ご指定のページは見つかりませんでした" />
		<p>
			削除されたか、移動されたか、まだ作成されていない可能性があります。もう一度リンクをお確かめください。
		</p>
	{:else}
		<SectionHeader title="{$page.status} - エラーが発生しました" />
		<p>{$page.error?.message ?? 'もう一度リンクをお確かめください。'}</p>
	{/if}
	<div class="mt-3 flex justify-center">
		<button on:click={() => history.back()}>戻る</button>
	</div>
</div>
