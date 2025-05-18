<script>
  import Icon from "@iconify/svelte";
</script>

<div class="h-screen relative flex justify-center place-items-center select-none">
  <div class="text-center flex flex-col justify-center items-center">
    <img
      src="./profile.jpg"
      alt="Profile"
      class="rounded-full aspect-square md:w-[25vw] w-[50vw] m-6"
    />
    <div>
      <div class="text-4xl md:text-7xl">Márk Károlyi</div>
      <div class="text-3xl md:text-6xl font-thin text-gray-700">
        Hair Stylist
      </div>
    </div>
  </div>

  <div class="absolute right-4 bottom-4 flex font-light">
    Scroll down!
    <Icon
      icon="material-symbols:arrow-cool-down-rounded"
      width="24"
      height="24"
    />
  </div>
</div>
