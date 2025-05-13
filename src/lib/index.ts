import { writable, type Writable } from "svelte/store";

export let scroll : Writable<number> = writable(0)
export let maxScroll : Writable<number> = writable()