import React, { useEffect, useState } from "react";
import { TiScissorsOutline, TiGlobeOutline } from "react-icons/ti";
import { changeLanguage, changeLanguageFunctions, currentLanguage, getData } from "../utility/language";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "./ui/navigation-menu"

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

    return (<div className="fixed top-0 flex flex-row w-screen text-medium text-secondary-foreground h-12 backdrop-blur-sm bg-secondary border-b-[3px] z-10" style={{ backgroundColor: `rgba(30, 41, 59, ${opacity})` }}>
        <a className="flex-1 flex items-center  place-content-start" href="/#" title={getData(lang, "top-main-title")}>
            <TiScissorsOutline className="p-0.5 text-[2.5rem] transition-all hover:bg-secondary-foreground hover:text-secondary text-secondary-foregroundS rounded-2xl translate-x-4" />
        </a>
        <div className="flex-1 flex items-center flex-grow p-3 text-lg text-center place-content-center">





            <NavigationMenu >
            

                <NavigationMenuList>
                   
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent rounded-xl text-secondary-foreground text-base tracking-tighter max-h-9 hover:bg-transparent hover:text-secondary-foreground focus:bg-transparent focus:text-secondary-foreground data-[active]:bg-transparent data-[state=open]:bg-secondary-foreground data-[state=open]:text-secondary pr-0.5 pl-2 -mx-0.5">
                            Projects
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="border-2 border-r-4 border-primary backdrop-blur-3xl text-medium py-1 bg-secondary rounded-xl text-slate-400 overflow-hidden flex flex-col text-left px-2 text-base transition-all">

                            
                                <NavigationMenuLink href="#projects/fashion" className="hover:text-secondary-foreground">Fashion</NavigationMenuLink>
                                <hr className="border-slate-700 mx-2"/>
                                <NavigationMenuLink href="#projects/commercials" className="hover:text-secondary-foreground">Commercials</NavigationMenuLink>
                                <hr className="border-slate-700 mx-2"/>
                                <NavigationMenuLink href="#projects/films" className="hover:text-secondary-foreground">Films</NavigationMenuLink>
                            
                            
                           
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        
                            <a href="/#contacts" className="hover:bg-secondary-foreground text-base text-secondary-foreground font-medium px-2 mx-1 py-2 rounded-xl transition-all hover:text-secondary tracking-tighter duration-200 max-h-8" title={getData(lang, "contacts-title")}>
                                {getData(lang, "contact")}
                            </a>
                            
                       
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        
                            <a href="/#about" className="hover:bg-secondary-foreground text-base text-secondary-foreground font-medium px-2 py-2 rounded-xl transition-all hover:text-secondary tracking-tighter duration-200 max-h-8" title={getData(lang, "about-title")}>
                                {getData(lang, "about")}
                            </a>
                       
                    </NavigationMenuItem>
                </NavigationMenuList>

                <NavigationMenuViewport />

            </NavigationMenu>

        </div>



        <div className="flex-1 flex items-center text-center place-content-end">
            { /* <ReactCountryFlag countryCode={languages[getOtherLanguage(lang)]} svg className="text-center transition-all text-5xl hover:cursor-pointer -translate-x-7" title={getData(lang, "top-flag-title")} onClick={changeLanguage} /> */}

            <TiGlobeOutline className="p-0.5 text-4xl transition-all hover:bg-secondary-foreground hover:text-secondary hover:cursor-pointer text-secondary-foregroundS rounded-2xl -translate-x-6" title={getData(lang, "top-flag-title")} onClick={changeLanguage}/>
        </div>
    </div>)
}   
