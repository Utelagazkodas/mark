import React, { useEffect, useState } from "react";
import { Topbar } from "../components/topbar";
import { Card } from "../components/card";
import { changeLanguageFunctions, currentLanguage, getData } from "../utility/language.ts";


export function Index(): React.ReactNode {
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
        <Topbar />
        <div className="bg-index flex-wrap bg-background bg-wiggle w-screen min-h-screen flex items-center flex-col place-content-center pt-12">
            <div className="fg-index *:m-5">
                asd
            </div>
        </div>
    </>)
}