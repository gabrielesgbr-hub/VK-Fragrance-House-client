import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

const AdminNavegacion = () => {
  const {logoutAdmin} = useContext(GlobalContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutAdmin()
    navigate('/admin/login')
  }

  return (
    <div className='center flex row'>
      <div className="col-4 mt-2">
        <h4><Link to="/admin/inventario" className='nav-ul-li'>Inventario</Link></h4>
      </div>
      <div className="col-4 mt-2">
        <h4><Link to="/admin/pedidos" className='nav-ul-li'>Pedidos</Link></h4>
      </div>
      <div className="col-4" style={{alignItems:'center'}}>
        <Button className='btn-vk2 mb-3' onClick={handleLogout}><h4>Cerrar Sesión</h4></Button>
      </div>
    </div>
  )
}

export default AdminNavegacion