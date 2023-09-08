<script>
	import Header from '../lib/components/Header.svelte';
	import "../app.css";
	import './styles.css';
    import Footer from '../lib/components/Footer.svelte';
</script>

<div class="app">
	<Header />

	<main class="flex-1 overflow-y-auto h-[calc(100vh-6rem)] ">
		<slot />

		<Footer/>
	</main>

	
</div>

<style>
	.app{
		@apply flex flex-col h-screen;
	}
</style>

