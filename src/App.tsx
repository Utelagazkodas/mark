import React, { useEffect } from "react"

interface pageSettings{
  title : string
  content : React.ReactNode
}


function App({title, content} : pageSettings) :JSX.Element {

  useEffect(()=>{
    if(title){
      document.title = title
    }
  })

  return (
    <>

      {content}
      
    </>
  )
}

export default App
