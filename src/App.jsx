import React from 'react';
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/Layout/ThemeContext'

import {Home} from "./pages/Home"
import {Product} from "./pages/Product"
import {Gallery} from "./pages/Gallery"
import {Contact} from "./pages/Contact"
import { ErrorPage } from './pages/ErrorPage'
import {Architectural} from './pages/Architectural'
import {Cultural} from './pages/Cultural'
import {FilmLooks} from './pages/FilmLooks'

import { AppLayout } from './components/Layout/AppLayout'

const router = createBrowserRouter([
{
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children:[
      { path: "/", element: <Home /> },
      { path: "product", element: <Product /> },
      
      { path: "gallery", element: <Gallery />, },
      { path: "architectural", element: <Architectural /> },
      { path: "cultural", element: <Cultural /> },
      { path: "filmlooks", element: <FilmLooks /> },

      { path: "contact", element: <Contact /> },
    ]
  }
])

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
    
  )
}

export default App
