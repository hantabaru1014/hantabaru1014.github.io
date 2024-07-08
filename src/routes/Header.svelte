<script lang="ts">
	import globalConfig from '$lib/globalConfig';
</script>

<header class="black-band text-xl shadow-md">
	<div class="mx-auto flex max-w-6xl flex-row justify-between px-3 py-5">
		<a href="/">
			<h1 class="text-2xl hover:text-white">{globalConfig.siteTitle}</h1>
		</a>
		<nav>
			<ul class="flex flex-row space-x-5">
				<li><a href="/">Home</a></li>
				<li><a href="/products">Products</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
	</div>
</header>
