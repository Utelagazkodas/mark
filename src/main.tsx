import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import '../index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Index } from './pages/index.tsx'
import { initializeLanguages } from './utility/language.ts'
import { Contacts } from './pages/contacts.tsx'
import { Page404 } from './pages/404.tsx'
import { About } from './pages/about.tsx'


async function initializeApp() {
  await initializeLanguages()

  const router = createHashRouter([{
    path: "/",
    element: (<App title='title' content={<Index/>}  />),
    errorElement: (<App title="404-title" content={<Page404/>}/>)
  },{
    path: "/contacts",
    element: (<App title='contacts-title' content={<Contacts/>}  />)
  },{
    path: "/about",
    element: (<App title='about-title' content={<About/>}  />)
  }])

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  ) 
}

initializeApp()
