import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import DetallePerfume from './DetallePerfume.jsx'
import Registro from './Registro.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/producto/:id", element: <DetallePerfume />},
  {path:"/registro", element: <Registro />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
