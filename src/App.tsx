import React from "react"

interface pageSettings{
  title : string
  content : React.ReactNode
}


export function App({title, content} : pageSettings) :JSX.Element {
  
    
  document.title = title
    
  

  return (
    <>

      {content}
      
    </>
  )
}
