import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import  {RouterProvider, createbrowserRouter} from 'react-router-dom'

import Layout from './Layout.jsx'

const router = createBrowserRouter([
 {
  path : '/',
  element : <Layout/>,
  children : [
   {
    path: "",
    element: <Home/>
   },
   {
    path: "about",
    element : <About/>
   }

  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RouterProvider router = {router}/>
   </BrowserRouter>
)
