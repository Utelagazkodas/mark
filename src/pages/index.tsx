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
        <div className="bg-index flex-wrap  w-screen min-h-screen flex items-center flex-col place-content-center bg-background bg-wiggle pt-16">
            <div className="fg-index">
                <Card>
                    <div className="flex flex-wrap flex-col items-center w-[65vw]">

                        <div className=" text-center text-wrap">
                            <div className="text-3xl">{getData(lang, "gypsy-title")}</div>
                            <div>{getData(lang, "gypsy-description")}</div>
                        </div>
                        <hr className="w-full my-2" />
                        <iframe src="https://www.youtube.com/embed/XkUINTHkFQg?si=TTqHGHkbPQSEU7QP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-xl mt-2 w-[65vw] h-[30vw]" ></iframe>


                    </div>
                </Card>

                <Card>
                    <div className="flex flex-wrap flex-col items-center">

                        <div className=" text-center text-wrap">
                            <div className="text-3xl">{getData(lang, "those-title")}</div>
                            <div>{getData(lang, "those-description")}</div>
                        </div>
                        <hr className="w-full my-2" />

                        <iframe src={getData(lang, "those-link")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-xl mt-2 w-[65vw] h-[30vw]" ></iframe>


                    </div>
                </Card>
            </div>
        </div>
    </>)
}