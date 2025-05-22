<script>
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";

    let mounted = false
    let pathname = "/"

    let updatePath = ()=>{pathname=window.location.pathname; alert(pathname)}

    onMount(()=>{mounted = true; updatePath(); window.addEventListener("", updatePath)})


</script>


{#if mounted}
    {#if pathname != "/"}
        <a
            class="ml-3 hover:cursor-pointer w-[32px] h-[32px] flex items-center"
            href="/"
        >
            <Icon
                icon="material-symbols:arrow-back-ios-new-rounded"
                height="24"
                width="24"
            />
        </a>
    {:else}
        <!-- svelte-ignore element_invalid_self_closing_tag -->
        <div class="ml-3 w-[32px] h-[32px]" />
    {/if}
{:else}
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <div class="ml-3 w-[32px] h-[32px]" />
{/if}