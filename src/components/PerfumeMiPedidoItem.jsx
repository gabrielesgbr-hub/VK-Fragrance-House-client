import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState"
import { Button } from "react-bootstrap"
import ContadorInput from "./ContadorInput"

const PerfumeMiPedidoItem = ({perfume}) => {
  const {quitarDelPedido, actualizarCantidad} = useContext(GlobalContext)
  const [cantidad, setCantidad] = useState(perfume.cantidad)

const handleCantidad = (nuevaCantidad) => {
    setCantidad(nuevaCantidad)
    actualizarCantidad(perfume._id, nuevaCantidad)
}

  return (
    <div className="row my-3">
        <div className="col-1">
          <Button className="btn-light" onClick={() => quitarDelPedido(perfume._id)}>✕</Button>
        </div>
        <div className="col-3 center">
            <img src={perfume.img} alt={perfume.nombre} style={{objectFit:'cover', height:'100px'}} />
        </div>
        <div className="col-2">
            {perfume.nombre}
        </div>
        <div className="col-1">
          ${perfume.precio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className="col-4 px-5">
          <ContadorInput stock={perfume.stock} cantidad={cantidad} setCantidad={handleCantidad} />
        </div>
        <div className="col-1 p-0">
          ${(perfume.precio*perfume.cantidad).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
    </div>
  )
}

export default PerfumeMiPedidoItem