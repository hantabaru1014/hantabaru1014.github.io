<script lang="ts">
	import AppSummaryItem from '$lib/components/AppSummaryItem.svelte';
	import Images from '$lib/components/Images.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<PageMeta
	title="Home"
	description="hantabaru1014が作成したソフトウェアやWebツールの紹介・配布など"
/>
<div class="space-y-8">
	<AppSummaryItem
		id="moa"
		name="マシュマロ配信支援ツール（仮）"
		detailLink="https://github.com/hantabaru1014/marshmallow-obs-assistant/blob/master/README.md"
		downloadLink="https://github.com/hantabaru1014/marshmallow-obs-assistant/releases"
	>
		<iframe
			slot="thumbnail"
			title="マシュマロ配信支援ツール（仮）の紹介動画"
			width="560"
			height="315"
			src="https://www.youtube.com/embed/o7OTvmbbBSA"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			class="max-w-full flex-shrink-0"
		></iframe>
		マシュマロ配信で，ダウンロードフォルダがマシュマロの画像で埋まる・画像を管理するのが面倒といった問題を軽減してくれるツールです。
		マシュマロの「画像ダウンロード」ボタンの機能を置き換えて，OBSへのマシュマロ画像の取り込みの手間を省きます。
	</AppSummaryItem>

	<AppSummaryItem id="ydga" name="Youtube-dl GUI Assistant" downloadLink="http://bit.ly/2Dvk1uB">
		<Images
			slot="thumbnail"
			galleryId="ydga"
			thumbnailClass="max-h-60 border"
			images={[
				{
					href: '/img/ydga01.png',
					url: '/img/ydga01.png',
					width: 634,
					height: 638
				}
			]}
		/>
		<p>
			CUIソフトである <a href="https://rg3.github.io/youtube-dl/">youtube-dl</a> と
			<a href="https://www.ffmpeg.org/">ffmpeg</a>
			を使いやすいようにGUIから操作できるようにした動画・音楽ダウンロードソフトです。<br />
			※画像はクリックすると拡大表示されます。<br />
			<br />
			動作環境： windows7/8/10 (.Net Framework4.5.2 以上がインストールされた環境)<br />
		</p>
	</AppSummaryItem>

	<div class="my-8 flex justify-center">
		<a href="/products">もっと見る</a>
	</div>
</div>
