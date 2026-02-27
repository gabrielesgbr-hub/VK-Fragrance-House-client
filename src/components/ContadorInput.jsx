import { useState } from 'react'

const ContadorInput = ({stock}) =>{
    const [cantidad, setCantidad] = useState(1)

    const Incrementar = () => {
        if (cantidad < stock) {
        setCantidad(prev => prev + 1)
        }
    }

    const Decrementar = () => {
        if (cantidad > 1) {
        setCantidad(prev => prev - 1)
        }
    }

    return(
        <>
            <div className="input-group inline-group">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" onClick={Decrementar}>
                <i className="fa fa-minus"></i>
                </button>
            </div>
            <input className="form-control center" value={cantidad} onChange={(e) => setCantidad(e.target.value)} type="number"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={Incrementar}>
                <i className="fa fa-plus"></i>
                </button>
            </div>
            </div>
        </>
    )
}

export default ContadorInput