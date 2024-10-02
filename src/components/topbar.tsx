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

import { Button } from "./ui/button";

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

    return (<div className="fixed top-0 flex flex-row w-screen text-medium  px-20 h-14 backdrop-blur-md bg-primary border-b-[3px] border-border z-10" style={{ backgroundColor: `rgba(248, 250, 252, ${opacity})` }}>
        <a className="flex items-center text-5xl" href="/#" title={getData(lang, "top-main-title")}>
            <TiScissorsOutline className="p-1 transition-all hover:bg-primary-foreground hover:text-primary text-primary-foreground rounded-2xl" />
        </a>
        <div className="flex items-center flex-grow p-3 text-lg text-center place-content-center">





            <NavigationMenu>
                <NavigationMenuList>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent rounded-xl text-primary-foreground text-base tracking-tighter max-h-8 py-1">
                            Projects
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="text-medium h-[8vw] bg-primary rounded-xl text-primary-foreground border">
                            
                                asdasd
                           
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        
                            <a href="/#contacts" className="hover:bg-primary-foreground text-base text-primary-foreground font-medium px-2 py-1 rounded-xl transition-all hover:text-primary tracking-tighter duration-200 max-h-8" title={getData(lang, "contacts-title")}>
                                {getData(lang, "contact")}
                            </a>
                       
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </div>



        <div className="flex items-center text-center">
            <ReactCountryFlag countryCode={languages[getOtherLanguage(lang)]} svg className="text-center transition-all text-5xl hover:cursor-pointer" title={getData(lang, "top-flag-title")} onClick={changeLanguage} />
        </div>
    </div>)
}   
