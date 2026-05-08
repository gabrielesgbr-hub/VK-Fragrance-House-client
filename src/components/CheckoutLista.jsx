import { useContext } from 'react'
import Cargando from './Cargando'
import CheckoutPerfumeItem from './CheckoutPerfumeItem'
import { GlobalContext } from '../context/GlobalState'
const CheckoutLista = ({perfumes}) => {
  const {loading} = useContext(GlobalContext)
  
  if(loading) return <Cargando />

  return (
    <ul className='lista'>
        {perfumes.map((perfume) => {
          return <CheckoutPerfumeItem key={perfume._id} perfume={perfume}/>
        })}
    </ul>
  )
}

export default CheckoutLista