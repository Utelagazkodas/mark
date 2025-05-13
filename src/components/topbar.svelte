<script>
  $: outerWidth = 0;
  $: innerWidth = 0;
  $: outerHeight = 0;
  $: innerHeight = 0;

  import Icon from "@iconify/svelte";

  import Drawer from "./Drawer.svelte";
  let open = false;
</script>

<svelte:window
  bind:innerWidth
  bind:outerWidth
  bind:innerHeight
  bind:outerHeight
/>

<div
  class="w-screen h-12 flex items-center sticky top-0 bg-white/50 backdrop-blur-sm border-b"
>
  {#if innerHeight < innerWidth && false}
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
  
    asd
  
</Drawer>
