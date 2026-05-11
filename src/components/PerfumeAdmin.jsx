import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'

const PerfumeAdmin = ({perfume}) => {
  const {destacarPerfume, marcarDisponible} = useContext(GlobalContext)

  return (
    <li>
      <div className='col-md-2'>{perfume.nombre}</div>
      <div className='col-md-1'>{perfume.marca}</div>
      <div className='col-md-1'>{perfume.sku}</div>
      <div className='col-md-1'>{perfume.categoria}</div>
      <div className='col-md-1'>${perfume.precio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
      <div className='col-md-1'>{perfume.stock}</div>
      <div className="col-md-2"><Button className={perfume.disponible ? "btn-success":"btn-danger"} onClick={()=>marcarDisponible(perfume._id)}>Disponible</Button></div>
      <div className="col-md-1"><Button className={perfume.destacado ? "btn-success":"btn-danger"} onClick={()=>destacarPerfume(perfume._id)} disabled={!perfume.disponible}>Destacar</Button></div>
      <div className="col-md-2"><Link to={`/admin/editar/${perfume._id}`}><Button className='btn-dark'>Editar</Button></Link></div>
    </li>
  )
}

export default PerfumeAdmin