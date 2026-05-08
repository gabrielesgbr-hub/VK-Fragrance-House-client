const ContadorInput = ({stock, cantidad, setCantidad}) =>{
    const Incrementar = () => {
        if (cantidad < stock) {
            const nueva = cantidad + 1
            setCantidad(nueva)
        }
    }

    const Decrementar = () => {
        if (cantidad > 1) {
            const nueva = cantidad - 1
            setCantidad(nueva)
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
            <input className="form-control center" value={cantidad} readOnly type="number"/>
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