<script>
  $: outerWidth = 0;
  $: innerWidth = 0;
  $: outerHeight = 0;
  $: innerHeight = 0;

  import Icon from "@iconify/svelte";

  import Drawer from "svelte-drawer-component";
  let open = false;
</script>

<svelte:window
  bind:innerWidth
  bind:outerWidth
  bind:innerHeight
  bind:outerHeight
/>

<div class="w-screen h-12 flex items-center absolute">
  {#if innerHeight < innerWidth && false}
    gép
  {:else}
    <button
    
      on:click={() => {
        open = true;
      }}
      ><Icon
        icon="material-symbols:menu-rounded"
        width="32"
        height="32"
      /></button
    >
    <div class="flex-1 text-center">
        Márk Károlyi hair
    </div>
  {/if}
</div>

<Drawer {open} size="75vw" on:clickAway={()=>{open=false}}>
  <button on:click={() => (open = false)}>Close</button>
</Drawer>
