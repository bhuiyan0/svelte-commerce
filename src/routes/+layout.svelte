<script>
	import Header from './Header.svelte';
	import "../app.css";
	import './styles.css';
    import Carousel from '../lib/components/home/Carousel.svelte';
</script>

<div class="app">
	<Header />

	<Carousel/>

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

