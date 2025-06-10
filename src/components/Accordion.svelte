<script>
	import Icon from "@iconify/svelte";
	export let open = false;
	import { slide } from "svelte/transition";
	const handleClick = () => (open = !open);
</script>

<div>
	<div class="flex w-full">
		<button onclick={handleClick} class="flex-[1] hover:cursor-pointer ">
			<slot name="head"></slot>
			<Icon
				icon="material-symbols:arrow-back-ios-new-rounded"
				width="24"
				height="24"
				style={`transform: rotate(${open ? "90deg" : "-90deg"});`}
				class="inline transition-all"
			/>
		</button>
	</div>

	{#if open}
		<div transition:slide>
			<slot name="details"></slot>
		</div>
	{/if}
</div>
