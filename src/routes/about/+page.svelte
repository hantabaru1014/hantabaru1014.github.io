<script lang="ts">
	import './page.css';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<svelte:head>
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<PageMeta title="About" description="このサイトについて。管理人(hantabaru1014)について。" />
<div class="flex flex-col justify-between lg:flex-row lg:space-x-5">
	<div class="flex-grow space-y-8">
		<div>
			<SectionHeader>このサイトについて</SectionHeader>
			<p>
				このサイトは主に hantabaru1014 が作成したソフトウェアやWebツールを紹介・配布しています。
			</p>
		</div>
		<div>
			<SectionHeader>hantabaru1014 について</SectionHeader>
			<dl class="fmt-dl">
				<dt>ID</dt>
				<dd>hantabaru1014</dd>
				<dt>Twitter</dt>
				<dd><a href="https://twitter.com/hantabaru1014">https://twitter.com/hantabaru1014</a></dd>
				<dt>Github</dt>
				<dd><a href="https://github.com/hantabaru1014">https://github.com/hantabaru1014</a></dd>
				<dt>E-Mail</dt>
				<dd>hantabaru1014@gmail.com</dd>
			</dl>
		</div>
	</div>
	<div>
		<a
			class="twitter-timeline"
			width="320px"
			height="600px"
			data-theme="light"
			data-chrome="nofooter"
			href="https://twitter.com/hantabaru1014?ref_src=twsrc%5Etfw">Tweets by hantabaru1014</a
		>
	</div>
</div>
