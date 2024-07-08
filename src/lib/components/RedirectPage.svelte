<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';

	export let redirectUrl: string;
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
	<meta http-equiv="refresh" content="0;URL='{redirectUrl}'" />
</svelte:head>

<div>
	<SectionHeader>このページはジャンプページです</SectionHeader>
	自動で目的のページにリダイレクトされるはずですが、されない場合は下のリンクからアクセスしてください。
	<div class="my-2 flex justify-center">
		<a href={redirectUrl}>リダイレクト先のページ</a>
	</div>
</div>
