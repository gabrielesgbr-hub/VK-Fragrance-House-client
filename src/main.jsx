import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState.jsx'
import App from './App.jsx'
import DetallePerfume from './pages/DetallePerfume.jsx'
import Tienda from './pages/Tienda.jsx'
import LoginAdmin from './pages/LoginAdmin.jsx'
import PanelAdmin from './pages/PanelAdmin.jsx'
import EditarPerfume from './pages/EditarPerfume.jsx'
import Pedido from './pages/Pedido.jsx'
import Checkout from './pages/Checkout.jsx'
import RutaAdmin from './components/RutaAdmin.jsx'
import PedidosAdmin from './pages/PedidosAdmin.jsx'
import AvisoPrivacidad from './pages/AvisoPrivacidad.jsx'
import TerminosCondiciones from './pages/TerminosCondiciones.jsx'
import EnviosDevoluciones from './pages/EnviosDevoluciones.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/perfume/:id", element: <DetallePerfume />},
  {path:"/tienda", element: <Tienda />},
  {path:"/pedido", element: <Pedido />},
  {path:"/checkout", element: <Checkout />},
  {path:"/aviso-privacidad", element: <AvisoPrivacidad />},
  {path:"/terminos-condiciones", element: <TerminosCondiciones />},
  {path:"/envios-devoluciones", element: <EnviosDevoluciones />},
  {path:"/admin/login", element: <LoginAdmin />},
  {path:"/admin/inventario", element: <RutaAdmin><PanelAdmin /></RutaAdmin>},
  {path:"/admin/pedidos", element: <RutaAdmin><PedidosAdmin /></RutaAdmin>},
  {path:"/admin/editar/:id", element: <RutaAdmin><EditarPerfume /></RutaAdmin>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </StrictMode>,
)
