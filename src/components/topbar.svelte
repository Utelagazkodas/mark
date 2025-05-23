<script lang="ts">
  $: innerWidth = 0;
  $: innerHeight = 0;

  import Icon from "@iconify/svelte";

  import Drawer from "./Drawer.svelte";
  import { isMobile, scroll } from "$lib";
  import { onMount } from "svelte";
    import BackButton from "./BackButton.svelte";
    import { get } from "svelte/store";
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
    <BackButton/>

    <div class="flex-1 text-center">Márk Károlyi Hair</div>

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
  <div
    class="h-screen w-full bg-white/35 backdrop-blur-xs relative text-center text-xl"
  >
    <div class="h-screen w-full px-14">
      <button
        class="hover:cursor-pointer"
        onclick={() => {
          workOpen = !workOpen;
        }}
      >
        My Works
        <Icon
          icon="material-symbols:arrow-back-ios-new-rounded"
          width="24"
          height="24"
          style={`transform: rotate(${workOpen ? "90deg" : "-90deg"});`}
          class="inline transition-all"
        />
      </button>

      <div style={`${workOpen ? "" : "display: none"};`} class="px-4">
        <hr />
        <a
          href="/works#movies"
          onclick={() => {
            drawerOpen = false;
          }}
        >
          Movies
        </a>
        <hr />

        <a
          href="/works#commercials
      "
          onclick={() => {
            drawerOpen = false;
          }}
        >
          Commercials</a
        >
        <hr />
        <a
          href="/works#fashion
      "
          onclick={() => {
            drawerOpen = false;
          }}>Fashion</a
        >
      </div>
      <hr />
      <a
        href="/#contact"
        onclick={() => {
          drawerOpen = false;
        }}
      >
        Contact
      </a>
    </div>
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
