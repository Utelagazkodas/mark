import React, { useEffect, useState } from "react";
import { Topbar } from "../components/topbar";
import { changeLanguageFunctions, currentLanguage, getData } from "../utility/language";

export function Page404() : React.ReactNode{

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


    return(<>
    <Topbar/>
    <div className="fixed  w-screen h-screen flex items-center place-content-center bg-slate-400">
        <div className="-translate-y-16 bg-orange-200  rounded-full text-center h-80 w-96 flex items-center place-content-center flex-col border-spacing-1 border-orange-300 border-solid border-4">
            <div className="text-xl">
                {getData(lang, "404-top")}
            </div>
            <div className="text-6xl">
                404
            </div>
            <div className="w-56 text-xl line-clamp-3">
            {getData(lang, "404-bottom")}
            </div>
        </div>
    </div>
    </>)
}