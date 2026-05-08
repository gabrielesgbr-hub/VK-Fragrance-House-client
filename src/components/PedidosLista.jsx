import { useContext } from 'react'
import Cargando from './Cargando'
import PedidoItem from './PedidoItem'
import { GlobalContext } from '../context/GlobalState'

const PedidosLista = ({pedidos}) => {
  const {loading} = useContext(GlobalContext)
  
  if(loading) return <Cargando />

  return (
    <ul className='lista2'>
        {pedidos.map((pedido) => {
          return <PedidoItem key={pedido._id} pedido={pedido}/>
        })}
    </ul>
  )
}

export default PedidosLista