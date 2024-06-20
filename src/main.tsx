import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Index } from './pages/index.tsx'

const router = createHashRouter([{
  path: "/",
  element: <Index/>,
  errorElement: (<>404</>)
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
) 

