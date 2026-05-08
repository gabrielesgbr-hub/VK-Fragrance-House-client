import { useState } from 'react'

const FiltrarPedidos = ({onSearch}) => {
    const [estados, setEstados] = useState([])

    const handleChange = (e) => {
        onSearch(e.target.value, estados)
    }

    const handleEstado = (e) => {
        const {value, checked} = e.target
        const nuevosE = checked ? [...estados, value] : estados.filter(c => c !== value)
        setEstados(nuevosE)
        onSearch(nuevosE)
    }

  return (
    <div className='d-flex align-items-center gap-5'>
        <h4>Filtrar por Estado: </h4>
        <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="pendiente" onChange={handleEstado} /> Pendientes
        </label>
        <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="completado" onChange={handleEstado} /> Completados
        </label>
        <label className='px-2 pb-1'>
            <input className='check' type="checkbox" value="cancelado" onChange={handleEstado} /> Cancelados
        </label>
    </div>
  )
}

export default FiltrarPedidos