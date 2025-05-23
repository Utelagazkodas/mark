<script lang="ts">
  import Topbar from "../components/topbar.svelte";
  import "../app.css";
  import { onMount } from "svelte";
  import { maxScroll, pathName, scroll } from "$lib";
  import { pushState } from "$app/navigation";
  import { get } from "svelte/store";

  let { children } = $props();

  onMount(() => {
    pathName.subscribe((value) => {
      console.log(value + "SUBS");
    });

    //sets scroll amounts
    maxScroll.set(contentDiv.scrollHeight);
    scroll.set(contentDiv.scrollTop);

    pathName.set(window.location.pathname);

    // interceps anchor clicks
    window.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;

      const anchor = target.closest("a");

      if (anchor) {
        event.preventDefault()
        const newPath = anchor.getAttribute("href")!.split("#")[0];
        console.log("old:", get(pathName), "new:", newPath);
        pathName.set(newPath);
        pushState(anchor.getAttribute("href")!, {})
      }
    });
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
