import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Button from 'react-bootstrap/Button'
import ContadorInput from "./components/ContadorInput"

const DetallePerfume = () =>{
    const {id} = useParams()
    const [item, setItem] = useState([])
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [id])
    
    useEffect(()=>{
    const fetchItems = async () => {
        const resultado = await fetch('/perfumes.json')
        const data = await resultado.json();
        const encontrado = data.find(p => p._id == id);
        setItem(encontrado);
    }
    fetchItems()
    },[id])

    if (!item) return <p>Cargando perfume...</p>

    return(
        <>
            <Header />
            <div className="container-fluid row pb-5 detalle">
                <div className="col-sm-6 pt-4 detalle-divimg">
                    <img src={item.img} alt={item.nombre}/>
                </div>
                <div className=" pt-5 col-sm-6">
                    <h2>{item.nombre}</h2>
                    <h4>Marca: {item.marca}</h4>
                    <h4 className="pb-2">{item.precio}</h4>
                    <h5 className="pb-2">{item.stock} Disponibles</h5>
                    <ContadorInput stock={item.stock} />
                    <Button className="btn-vk mt-3"><i className="fa-solid fa-bag-shopping"></i> Agregar al Pedido</Button>
                    <p className="pt-4">{item.descripcion}</p>
                    <p>Categoría: {item.categoria}</p>
                    <p>Condición: {item.condición}</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetallePerfume