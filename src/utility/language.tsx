import { getCookie, setCookie } from "typescript-cookie"

export let currentLanguage : number = 0 // 0 is english 1 is hungarian

export let languages : string[] = ["gb", "hu"]

export let changeLanguageFunctions : Function[] = []

let languageData : any[] = []

export async function initializeLanguages(){

    let prefLang= getCookie("prefLang")

    if(navigator.language == "hu"){
        currentLanguage = 1
    }

    if(prefLang){
        currentLanguage = Number(prefLang)
    }




    let response = await fetch("./translations/" + languages[0] + ".json")
    let t = await response.json()
    languageData.push(t)
    
    response = await fetch("./translations/" + languages[1] + ".json")
    t = await response.json()
    languageData.push(t)

}

export async function changeLanguage(){
    if(currentLanguage == 0){
        currentLanguage = 1
    }
    else{
        currentLanguage = 0
    }

    setCookie("prefLang", currentLanguage, {expires: 7, path : "/"})

    changeLanguageFunctions.forEach((func) => {
        func(currentLanguage)
    })
}

export function getOtherLanguage(lang : number) : number{
    if(lang == 1){
        return 0
    }
    return 1
}


export function getData(lang : number, name : string) : string{
    let t = languageData[lang][name]

    if(t){
        return t
    }

    throw Error("entry in language data doesnt exist")
} 
