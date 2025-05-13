<script lang="ts">
  import Topbar from "../components/topbar.svelte";
  import "../app.css";
  import { onMount } from "svelte";

  let { children } = $props();

  onMount(() => {
    window.name = "asd";
  });

  let contentDiv : HTMLDivElement
</script>

<div bind:this={contentDiv} class="overflow-y-scroll h-screen overflow-x-hidden hide-scrollbar">
  <Topbar />

  <div >
    {@render children()}
  </div>
</div>
