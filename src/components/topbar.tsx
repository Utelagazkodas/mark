import React, { useEffect, useState } from "react";
import { TiScissorsOutline } from "react-icons/ti";
import ReactCountryFlag from "react-country-flag";
import { changeLanguage, changeLanguageFunctions, currentLanguage, getData, getOtherLanguage, languages } from "../utility/language";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "./ui/navigation-menu"

import { Button } from "@/src/components/*/ui/button";

export function Topbar(): React.ReactNode {
    // create lang
    const [lang, setLang] = useState(currentLanguage)
    useEffect(() => {
        changeLanguageFunctions.push(setLang);

        // Cleanup function to remove the setLang from changeLanguageFunctions when component unmounts
        return () => {
            const index = changeLanguageFunctions.indexOf(setLang);
            if (index !== -1) {
                changeLanguageFunctions.splice(index, 1);
            }
        };
    }, []);
    // -----

    // handles the bg opacity
    const [opacity, setOpacity] = useState(1);

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const maxScroll = 100 // Adjust as needed
        const newOpacity = Math.max(0.5, (1 - (scrollPosition / maxScroll)))
        setOpacity(newOpacity)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    // ---

    return (<div className="fixed top-0 flex flex-row w-screen text-medium  px-20 h-16 backdrop-blur-sm bg-slate-700 border-b-[3px] border-slate-700 z-10" style={{ backgroundColor: `rgba(64, 64, 64, ${opacity})` }}>
        <a className="flex items-center text-5xl" href="/#" title={getData(lang, "top-main-title")}>
            <TiScissorsOutline className="p-1 transition-all hover:bg-white hover:text-slate-500 rounded-2xl" />
        </a>
        <div className="flex items-center flex-grow p-3 text-lg text-center place-content-center">
            <a href="/#contacts" className=" hover:bg-slate-200 px-2 py-1 rounded-xl transition-all hover:text-slate-700 tracking-tighter hover:tracking-normal duration-200" title={getData(lang, "contacts-title")}>
                {getData(lang, "contact")}
            </a>

            <Button></Button>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="text-medium w-11 h-11">

                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </div>



        <div className="flex items-center text-center">
            <ReactCountryFlag countryCode={languages[getOtherLanguage(lang)]} svg className="text-center transition-all text-5xl hover:cursor-pointer" title={getData(lang, "top-flag-title")} onClick={changeLanguage} />
        </div>
    </div>)
}   
