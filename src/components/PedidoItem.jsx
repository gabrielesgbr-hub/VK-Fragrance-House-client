import {useContext} from 'react'
import { Button } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'

const PedidoItem = ({pedido}) => {
  const {modificarEstado, deletePedido} = useContext(GlobalContext)

  const estado = pedido.estado[0].toUpperCase() + pedido.estado.slice(1)

  const handleCompletar = () => {
    const completar = {accion:"completar"}
    const confirmado = window.confirm('¿Estás seguro de que deseas marcar este pedido como completado?')
    if (confirmado) modificarEstado(pedido._id, completar)
  }

  const handleCancelar = () => {
    const cancelar = {accion:"cancelar"}
    const confirmado = window.confirm('¿Estás seguro de que deseas marcar este pedido como cancelado?')
    if (confirmado) modificarEstado(pedido._id, cancelar)
  }

  const handleDelete = () => {
    const confirmado = window.confirm('¿Estás seguro de que deseas marcar eliminar este pedido de la base de datos?')
    if (confirmado) deletePedido(pedido._id)
  }

  return (
    <>   
      <li className='mt-3'>
        <div className='px-3 pt-2 d-flex justify-content-between align-items-center' style={{color:'white', backgroundColor: pedido.estado === 'pendiente' ? '#08AEC4' : pedido.estado === 'completado' ? 'green' : 'orange'}}>
          <h5><strong>{estado}</strong></h5>
          <h5>Fecha de Creación: {new Date(pedido.createdAt).toLocaleDateString('es-MX')}</h5>
        </div>
        <div className="row p-2">
          <div className='col-md-2'><strong>Nombre: </strong>{pedido.nombre}</div>
          <div className='col-md-2'><strong>Teléfono: </strong>{pedido.telefono}</div>
          <div className='col-md-3'><strong>Email: </strong>{pedido.email}</div>
          <div className='col-md-5'><strong>Dirección: </strong>{pedido.direccion}</div>
        </div>
        <div className="row mt-2 p-2">
          <div className='col-md-2'><strong>Total: </strong>${pedido.total.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          <div className='col-md-2'><strong>Método de Pago: </strong>{pedido.metodo_pago}</div>
          <div className="col-md-4"><strong>Productos: </strong>{pedido.productos.map((item, index) => (<span key={index}>{item.producto.nombre} x{item.cantidad} <br/></span>))}</div>
          <div className="col-md-1"><Button className='btn-success' onClick={handleCompletar} disabled={pedido.estado !== 'pendiente'}>Completar</Button></div>
          <div className="col-md-1"><Button className='btn-warning' onClick={handleCancelar} disabled={pedido.estado !== 'pendiente'}>Cancelar</Button></div>
          <div className="col-md-2 center2"><Button className="btn-danger" onClick={handleDelete} disabled={pedido.estado === 'pendiente'}>Eliminar</Button></div>
        </div>
      </li>
    </>
  )
}

export default PedidoItem