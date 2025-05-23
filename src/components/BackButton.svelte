<script>
    import Icon from "@iconify/svelte";

    export let pathName = "/"
</script>

{#if pathName != "/"}
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
