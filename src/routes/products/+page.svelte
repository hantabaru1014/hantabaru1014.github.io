<script lang="ts">
	import AppSummaryItem from '$lib/components/AppSummaryItem.svelte';
	import Images from '$lib/components/Images.svelte';
</script>

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
				},
				{
					href: '/img/ydga02.png',
					url: '/img/ydga02.png',
					width: 476,
					height: 591
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

	<AppSummaryItem
		id="bvi"
		name="Baru's Voice Input"
		detailLink="https://github.com/hantabaru1014/BarusVoiceInput/blob/master/README.md"
		downloadLink="https://github.com/hantabaru1014/BarusVoiceInput/releases"
	>
		<p>
			スマホのキーボードについてる音声入力のPC版<br /><br />
			動作環境： .Net Framework4.5.2 以上<br />
			配布形式： zipファイル（解凍してそのまま使えます）
		</p>
	</AppSummaryItem>

	<AppSummaryItem
		id="bdl"
		name="BarusDesktopLauncher"
		detailLink="https://github.com/hantabaru1014/BarusDesktopLauncher/blob/master/README.md"
		downloadLink="https://github.com/hantabaru1014/BarusDesktopLauncher/releases"
	>
		<p>
			シンプルなランチャーソフトです。 タスクバーにいて、指定したフォルダの中をリスト表示します。
			<br />
			動作環境： windows7/8/10 (.Net Framework4.6.1 以上がインストールされた環境)<br />
			配布形式： zipファイル（解凍してそのまま使えます）
		</p>
	</AppSummaryItem>

	<AppSummaryItem id="wordlens" name="PC版word lensもどき">
		<iframe
			slot="thumbnail"
			title="PC版word lensもどきの紹介動画"
			width="560"
			height="315"
			src="https://www.youtube.com/embed/dbaxwgBvcD8"
			frameborder="1"
			allow="autoplay; encrypted-media"
			allowfullscreen
			class="max-w-full flex-shrink-0"
		></iframe>
		<p>
			AndroidのGoogle翻訳アプリで使えるword
			lensに感動したので、適当にそれっぽいものをPC用で作ってみました。実用には耐えませんｗ<br />
			本来は英語のみのゲームとかで使うために作ったのですが、今回は手軽にwebページを使ってデモをしています。（webの翻訳が目的ならchromeデフォの翻訳機能とかのほうが断然いいですｗ）<br
			/>
			動作としては：<br />
			1、ホットキーが押される<br />
			2、指定範囲をスクショ→OCR<br />
			3、OCRの結果を翻訳<br />
			4、結果の文字列を行単位で元の文字の大きさに大体合わせる<br />
			5、オーバーレイ表示<br />
			という感じのことをしています。<br /><br />
			(配布は行っていません)
		</p>
	</AppSummaryItem>
</div>
