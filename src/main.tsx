import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Index } from './pages/index.tsx'
import { initializeLanguages } from './utility/language.tsx'
import { Contacts } from './pages/contacts.tsx'
import { Page404 } from './pages/404.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

async function initializeApp() {
  await initializeLanguages()

  const router = createHashRouter([{
    path: "/",
    element: (<App title='title' content={<Index/>}  />),
    errorElement: (<App title="404-title" content={<Page404/>}/>)
  },{
    path: "/contacts",
    element: (<App title='contacts-title' content={<Contacts/>}  />)
  }])

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  ) 
}

initializeApp()
