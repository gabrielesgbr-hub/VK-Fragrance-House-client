import Header from '../components/Header'
import Footer from '../components/Footer'
import AdminNavegacion from '../components/AdminNavegacion'
import PedidosLista from '../components/PedidosLista'
import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import FiltrarPedidos from '../components/FiltrarPedidos'

const PedidosAdmin = () => {
  const {pedidos, getPedidos} = useContext(GlobalContext)

  useEffect(() => {
    getPedidos()
  }, [])

  const [resultados, setResultados] = useState([])

  useEffect(() => {
    setResultados(pedidos)
  }, [pedidos])

  const handleSearch = (estados) => {
    if (estados.length > 0) {
      const filtrados = pedidos.filter(item => estados.includes(item.estado))
      setResultados(filtrados)
    } else {
      setResultados([...pedidos]) 
    }

    setResultados(filtrados)
  }

  return (
    <>
      <Header />
      <div className="container-fluid pt-4" style={{backgroundColor:'black'}}>
        <AdminNavegacion />
      </div>
      <div className='container pt-4' style={{minHeight:'500px'}}>
        <h2 className='center pt-2 pb-2'>Gestión de Pedidos</h2>
        <FiltrarPedidos onSearch={handleSearch} />
        <PedidosLista pedidos={resultados} />
      </div>
      <div className="footer container-fluid">
        <Footer />
      </div>
    </>
  )
}

export default PedidosAdmin