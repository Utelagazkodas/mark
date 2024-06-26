import React, { useEffect, useState } from "react"
import { changeLanguageFunctions, currentLanguage, getData } from "./utility/language"



interface pageSettings {
  title: string
  content: React.ReactNode
}


export function App({ title, content }: pageSettings): React.ReactNode {

  const [lang, setLang] = useState(currentLanguage)

  useEffect(() => {
    changeLanguageFunctions.push(setLang);

    // Cleanup function to remove the setLang from changeLanguageFunctions when component unmounts
    return () => {
      const index = changeLanguageFunctions.indexOf(setLang);
      if (index !== -1) {
        changeLanguageFunctions.splice(index, 1)
      }
    }
  }, [])

  useEffect(() => {
    document.title = getData(lang, title)
  }, [lang, title])


  return (
    <div className="overflow-x-hidden pt-16 font-mono">
      {content}
    </div>
  )
}
