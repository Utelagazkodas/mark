<script lang="ts">
  $: innerWidth = 0;
  $: innerHeight = 0;

  import Icon from "@iconify/svelte";

  import Drawer from "./Drawer.svelte";
  import { isMobile, scroll } from "$lib";
  let open = false;

  let TopBarComponent : HTMLDivElement
  
  scroll.subscribe((value)=>{
    TopBarComponent.style.opacity = "0"
  })

</script>

<svelte:window
  bind:innerWidth
  bind:innerHeight
/>

<div
  bind:this={TopBarComponent}

  class="w-screen h-12 flex items-center absolute top-0 backdrop-blur-xs border-b bg-white/60"
>
  {#if !isMobile(innerWidth ,innerHeight)}
    gép
  {:else}
    <!--IGNORE THIS NOT, MY FINEST WORK, this is so that the text is in the middle-->
    <div class="ml-3 w-[32px] h-[32px]"></div>

    <div class="flex-1 text-center">Márk Károlyi hair</div>

    <button
      class="mr-3 hover:cursor-pointer"
      on:click={() => {
        open = true;
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
  {open}
  size="75vw"
  on:clickAway={() => {
    open = false;
  }}
  placement={"right"}
  
>
  
    <div class="h-screen w-full bg-white/35 backdrop-blur-xs relative">
        <button class="absolute top-3 right-3 hover:cursor-pointer" on:click={()=>{open=false}}>
          <Icon icon="material-symbols:close-rounded" width="32" height="32" />
        </button>
    </div>
  
</Drawer>
