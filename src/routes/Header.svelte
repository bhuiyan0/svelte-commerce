<script>
    import Logo from '../lib/components/icons/Logo.svelte';
    import MenuIcon from '../lib/components/icons/MenuIcon.svelte';
    import SearchIcon from '../lib/components/icons/SearchIcon.svelte';
</script>

<header class="">
	<div class="topbar h-8 bg-slate-100">
		<div class="flex items-center justify-end h-full text-black">
			<a href="tel:1-800-555-5555" class="text-sm font-bold mr-2">1-800-555-5555</a>
		</div>
	</div>
	<div class="w-full h-16 shadow-md flex items-center px-2 justify-between">
		<MenuIcon/>

		<a href="/">
			<Logo/>
		</a>
		<button>
			<SearchIcon/>
		</button>
	</div>
</header>

