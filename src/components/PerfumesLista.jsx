import { useContext } from 'react'
import Cargando from './Cargando'
import PerfumeAdmin from './PerfumeAdmin'
import { GlobalContext } from '../context/GlobalState'

const PerfumesLista = ({perfumes}) => {
  const {loading} = useContext(GlobalContext)
  
  if(loading) return <Cargando />

  return (
    <ul className='lista'>
        {perfumes.map((perfume) => {
          return <PerfumeAdmin key={perfume._id} perfume={perfume}/>
        })}
    </ul>
  )
}

export default PerfumesLista