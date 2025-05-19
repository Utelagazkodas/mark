<script lang="ts">
  $: innerWidth = 0;
  $: innerHeight = 0;

  import Icon from "@iconify/svelte";

  import Drawer from "./Drawer.svelte";
  import { isMobile, scroll } from "$lib";
  import { onMount } from "svelte";
  let drawerOpen = false;

  let workOpen = false;

  let TopBarComponent: HTMLDivElement;

  onMount(() => {
    scroll.subscribe((value) => {
      TopBarComponent.style.opacity = `${value / 30}`;
    });
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div
  bind:this={TopBarComponent}
  class="w-screen h-12 flex items-center absolute top-0 backdrop-blur-xs border-b z-10 bg-white/60 transition-all duration-200 opacity-0"
>
  {#if !isMobile(innerWidth, innerHeight)}
    gép
  {:else}
    <!--IGNORE THIS NOT, MY FINEST WORK, this is so that the text is in the middle-->
    <div class="ml-3 w-[32px] h-[32px]"></div>

    <div class="flex-1 text-center">Márk Károlyi hair</div>

    <button
      class={`mr-3 clickable-on-scroll ${$scroll > 0 ? "hover:cursor-pointer" : ""}`}
      onclick={() => {
        drawerOpen = true;
      }}
      ><Icon
        icon="material-symbols:menu-rounded"
        width="32px"
        height="32px"
      /></button
    >
  {/if}
</div>

<Drawer
  open={drawerOpen}
  size="75vw"
  on:clickAway={() => {
    drawerOpen = false;
  }}
  placement={"right"}
  duration={0.2}
>
  <div class="h-screen w-full bg-white/35 backdrop-blur-xs relative">
    <button class="hover:cursor-pointer" onclick={()=>{workOpen = !workOpen}}> My Works </button>
    <div style={`display: ${workOpen ? "" : "none"};`}>
      <a href=""> Movies </a>

      <a
        href="
      "
      >
        Commercials</a
      >
      <a
        href="
      ">Fashion</a
      >
    </div>
    <a href=""> Contact </a>
    <button
      class="absolute top-3 right-3 hover:cursor-pointer"
      onclick={() => {
        drawerOpen = false;
      }}
    >
      <Icon icon="material-symbols:close-rounded" width="32" height="32" />
    </button>
  </div>
</Drawer>
