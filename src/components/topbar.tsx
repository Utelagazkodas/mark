import React from "react";
import { TiScissorsOutline } from "react-icons/ti";

export function Topbar() : React.ReactNode {
    return(<div className="w-screen h-18 bg-zinc-500 text-white flex text-5xl">
        <div className=" flex items-center p-3"><TiScissorsOutline className="hover:bg-white hover:text-zinc-500 p-1 rounded-2xl transition-all hover:cursor-pointer" onClick={()=>{document.location.pathname = "/#"}}/></div>
    </div>)
}   