import { writable, type Writable, get } from "svelte/store";

export let scroll : Writable<number> = writable(0)
export let maxScroll : Writable<number> = writable()
export let highestScroll : Writable<number> = writable(0)

export let pathName : Writable<string> = writable("/")

export function setScroll(value: number){
    scroll.set(value)

    if(value > get(highestScroll)){
        highestScroll.set(value)
    }
}

export function isMobile(width : number, height : number): boolean{
    return width < height || width < 500 || true
}
