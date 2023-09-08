<script>
    import Logo from './icons/Logo.svelte';
    import MenuIcon from './icons/MenuIcon.svelte';
    import SearchIcon from './icons/SearchIcon.svelte';
</script>

<header class="h-24 sticky top-0 w-full left-0 z-10 bg-white">
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

