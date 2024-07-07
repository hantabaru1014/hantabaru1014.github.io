<script lang="ts">
	const INIT_YEAR = 2021;
	const curYear = new Date().getFullYear();
	const text = INIT_YEAR === curYear ? `${INIT_YEAR}` : `${INIT_YEAR}-${curYear}`;
</script>

<footer class="black-band mt-5 flex w-screen justify-center py-2">
	<span>Copyright © {text} hantabaru1014</span>
</footer>
