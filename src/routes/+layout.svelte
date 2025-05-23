<script lang="ts">
  import Topbar from "../components/topbar.svelte";
  import "../app.css";
  import { onMount } from "svelte";
  import { maxScroll, scroll } from "$lib";
  import { pushState } from "$app/navigation";
  import { get } from "svelte/store";

  let { children } = $props();

  onMount(() => {


    //sets scroll amounts
    maxScroll.set(contentDiv.scrollHeight);
    scroll.set(contentDiv.scrollTop);
  });

  let contentDiv: HTMLDivElement;
</script>

<svelte:head>
  <title>Márk Károlyi Hair</title>
</svelte:head>

<div
  bind:this={contentDiv}
  class="overflow-y-scroll h-screen overflow-x-hidden hide-scrollbar w-screen"
  onscroll={(event) => {
    scroll.set(event.currentTarget.scrollTop);
  }}
  id="content"
>
  <Topbar />

  <div class="">
    {@render children()}
  </div>
</div>
