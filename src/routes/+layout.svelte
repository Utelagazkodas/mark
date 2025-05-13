<script lang="ts">
	import Topbar from '../components/topbar.svelte';
	import '../app.css';
	
	let { children } = $props();
</script>

<Topbar/>

<div class="overflow-y-scroll overflow-x-hidden">
{@render children()}
</div>
