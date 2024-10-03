import React, { useEffect, useState } from "react";
import { Topbar } from "../components/topbar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { changeLanguageFunctions, currentLanguage, getData } from "../utility/language";


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
        <div className="bg-index flex-wrap bg-background bg-wiggle w-screen min-h-screen flex items-center flex-col place-content-center pt-16">
            <div className="fg-index *:m-5">
                <Card>
                    <CardHeader>
                        <CardTitle>{getData(lang, "gypsy-title")}</CardTitle>

                    </CardHeader>

                    <CardContent>
                        <iframe src="https://www.youtube.com/embed/XkUINTHkFQg?si=TTqHGHkbPQSEU7QP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-xl mt-2 w-[65vw] h-[30vw]" ></iframe>
                    </CardContent>
                    <CardFooter>
                        <div>{getData(lang, "gypsy-description")}</div>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{getData(lang, "those-title")}</CardTitle>

                    </CardHeader>

                    <CardContent>
                        <iframe src={getData(lang, "those-link")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-xl mt-2 w-[65vw] h-[30vw]" ></iframe>
                    </CardContent>
                    <CardFooter>
                        <div>{getData(lang, "those-description")}</div>
                    </CardFooter>









                </Card>
            </div>
        </div>
    </>)
}