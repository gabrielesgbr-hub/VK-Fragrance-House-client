import Cargando from './Cargando'
import PerfumeItem from './PerfumeItem'

const PerfumesGrid = ({items, isLoading}) => {
  return isLoading ? (
    <Cargando />
  ):(
    <section className='cards'>
        {items.map((item) => {
          return <PerfumeItem key={item._id} item={item}/>
        })}
    </section>
  )
}

export default PerfumesGrid
