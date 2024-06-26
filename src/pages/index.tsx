import React, { useEffect, useState } from "react";
import { Topbar } from "../components/topbar";
import { Card } from "../components/card";
import { changeLanguageFunctions, currentLanguage, getData } from "../utility/language";


export function Index() : React.ReactNode {
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


    return (<>
    <Topbar/>
    <div className="fixed  w-screen h-screen flex items-center flex-col place-content-center bg-zinc-400 bg-wiggle ">
        <Card>
            <div className="flex">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/XkUINTHkFQg?si=TTqHGHkbPQSEU7QP" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-xl" ></iframe>

        <div className="m-10">
            <div className="text-3xl">{getData(lang, "gypsy-title")}</div>
            <div>{getData(lang, "gypsy-description")}</div>
        </div>

        </div>
        </Card>
    </div>
    </>)
}