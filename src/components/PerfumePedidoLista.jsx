import { useContext } from 'react'
import Cargando from './Cargando'
import PerfumePedidoItem from './PerfumePedidoItem'
import { GlobalContext } from '../context/GlobalState'

const PerfumePedidoLista = ({perfumes}) => {
  const {loading} = useContext(GlobalContext)
  
  if(loading) return <Cargando />

  return (
    <ul className='lista'>
        {perfumes.map((perfume) => {
          return <PerfumePedidoItem key={perfume._id} perfume={perfume}/>
        })}
    </ul>
  )
}

export default PerfumePedidoLista