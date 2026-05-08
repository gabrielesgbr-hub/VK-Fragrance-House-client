import { useEffect, useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalState"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from 'react-bootstrap/Button'
import ContadorInput from "../components/ContadorInput"

const DetallePerfume = () =>{
    const {id} = useParams()

    const [cantidad, setCantidad] = useState(1)
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }, [id])

    const {perfumes} = useContext(GlobalContext)    
    const perfume = perfumes.find(p => p._id.toString() == id)

    const {agregarAlPedido} = useContext(GlobalContext)

    if (!perfume) return <p>Cargando perfume...</p>

    return(
        <>
            <Header />
            <div className="container-fluid pb-5 detalle">
                <div className="row">
                    <div className="col-lg-6 col-md-5 pt-5   detalle-divimg">
                        <img src={perfume.img} alt={perfume.nombre}/>
                    </div>
                    <div className=" pt-5 col-lg-6 col-md-7">
                        <h2>{perfume.nombre}</h2>
                        <h4>Marca: {perfume.marca}</h4>
                        <h4 className="pb-2">${perfume.precio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                        <h5 className="pb-2">{perfume.stock} Disponibles</h5>
                        <ContadorInput stock={perfume.stock} cantidad={cantidad} setCantidad={setCantidad} />
                        <Button className="btn-vk mt-3" onClick={() => agregarAlPedido(perfume, cantidad)}><i className="fa-solid fa-bag-shopping"></i> Agregar al Pedido</Button>
                        <p className="pt-4">{perfume.descripcion}</p>
                        <p>Categoría: {perfume.categoria}</p>
                        <p>Condición: {perfume.condicion}</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer">
                <Footer />
            </div>
        </>
    )
}

export default DetallePerfume