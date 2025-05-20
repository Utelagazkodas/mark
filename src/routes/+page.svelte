<script lang="ts">
    import { scroll } from "$lib";
  import Icon from "@iconify/svelte";
    import { onMount } from "svelte";

  let scrollArrow : HTMLDivElement

  onMount(()=>{
    scroll.subscribe((value)=>{
      scrollArrow.style.opacity = `${1-value/50}`
    })
  })
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<div class="scroll-bg"/>


<div class="h-screen relative flex justify-center place-items-center select-none">
  <div class="text-center flex flex-col justify-center items-center bg-gray-200/60 backdrop-blur-md rounded-2xl p-3">
    <div>
      <div class="text-4xl md:text-6xl ">Márk Károlyi</div>
      <div class="text-3xl md:text-5xl font-light text-gray-600">
        Hair Stylist
      </div>
    </div>
  </div>

  <div class="absolute right-4 bottom-4 flex font-light bg-gray-200/60 backdrop-blur-md rounded-xl p-2" bind:this={ scrollArrow}>
    Scroll down!
    <Icon
     
      icon="material-symbols:arrow-cool-down-rounded"
      width="24"
      height="24"
    />
  </div>
</div>

<hr>

<div class="h-screen bg-gray-100/70 backdrop-blur-lg">

</div>
