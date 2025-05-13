<script lang="ts">
  import Topbar from "../components/topbar.svelte";
  import "../app.css";
  import { onMount } from "svelte";

  let { children } = $props();

  onMount(() => {
    
  });

  let contentDiv : HTMLDivElement
</script>

<svelte:head>
	<title>Márk Károlyi Hair</title>
</svelte:head>

<div bind:this={contentDiv} class="overflow-y-scroll h-screen overflow-x-hidden hide-scrollbar">
  <Topbar />

  <div class="">
    {@render children()}
  </div>

  
</div>
