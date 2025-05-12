import React, { useEffect, useState } from "react";
import { TiGlobeOutline, TiScissorsOutline } from "react-icons/ti";
import ReactCountryFlag from "react-country-flag";
import { changeLanguage, changeLanguageFunctions, currentLanguage, getData, getOtherLanguage, languages } from "../utility/language.ts";



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





        </div>



        <div className="flex-1 flex items-center text-center place-content-end">
            { /* <ReactCountryFlag countryCode={languages[getOtherLanguage(lang)]} svg className="text-center transition-all text-5xl hover:cursor-pointer -translate-x-7" title={getData(lang, "top-flag-title")} onClick={changeLanguage} /> */}

            <TiGlobeOutline className="p-0.5 text-4xl transition-all hover:bg-secondary-foreground hover:text-secondary hover:cursor-pointer text-secondary-foregroundS rounded-2xl -translate-x-6" title={getData(lang, "top-flag-title")} onClick={changeLanguage}/>
        </div>
    </div>)
}   
