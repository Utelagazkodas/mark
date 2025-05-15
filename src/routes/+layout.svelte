<script lang="ts">
  import Topbar from "../components/topbar.svelte";
  import "../app.css";
  import { onMount } from "svelte";
  import { maxScroll, scroll } from "$lib";

  let { children } = $props();

  onMount(() => {
    maxScroll.set(contentDiv.scrollHeight)
  });

  let contentDiv : HTMLDivElement
</script>

<svelte:head>
	<title>Márk Károlyi Hair</title>
</svelte:head>

<div bind:this={contentDiv} class="overflow-y-scroll h-screen overflow-x-hidden hide-scrollbar" onscroll={(event)=>{scroll.set(event.currentTarget.scrollTop)}}>
  <Topbar />

  <div class="">
    {@render children()}
  </div>

  
</div>
