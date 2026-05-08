import { useContext } from 'react'
import Cargando from './Cargando'
import PerfumeMiPedidoItem from './PerfumeMiPedidoItem'
import { GlobalContext } from '../context/GlobalState'

const PerfumeMiPedidoLista = ({perfumes}) => {
  const {loading} = useContext(GlobalContext)
  
  if(loading) return <Cargando />

  return (
    <ul className='lista'>
        {perfumes.map((perfume) => {
          return <PerfumeMiPedidoItem key={perfume._id} perfume={perfume}/>
        })}
    </ul>
  )
}

export default PerfumeMiPedidoLista