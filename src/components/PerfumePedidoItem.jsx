import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import { Button } from "react-bootstrap"

const PerfumePedidoItem = ({perfume}) => {
  const {quitarDelPedido} = useContext(GlobalContext)

  return (
    <div className="row my-3">
        <div className="col-4">
            <img src={perfume.img} alt={perfume.nombre} style={{objectFit:'cover', width:'100%', height:'100%'}} />
        </div>
        <div className="col-7">
            {perfume.nombre}
            <br />
            {perfume.cantidad} ✕ ${perfume.precio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className="col-1">
          <Button className="btn-light px-1" onClick={() => quitarDelPedido(perfume._id)}>✕</Button>
        </div>
    </div>
  )
}

export default PerfumePedidoItem