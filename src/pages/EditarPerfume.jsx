import { useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { GlobalContext } from "../context/GlobalState"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AdminNavegacion from '../components/AdminNavegacion'
import Button from 'react-bootstrap/Button'
import ContadorInput from "../components/ContadorInput"
import EditarPerfumeForm from "../components/EditarPerfumeForm"

const EditarPerfume = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }, [id])

    const {perfumes, destacarPerfume, marcarDisponible, deletePerfume} = useContext(GlobalContext)    
    const perfume = perfumes.find(p => p._id.toString() == id)

    if (!perfume) return <p>Cargando perfume...</p>

    const handleDelete = () => {
        const confirmado = window.confirm('¿Estás seguro de que deseas eliminar este perfume del inventario?')
        if(confirmado) {
            deletePerfume(perfume._id)
            navigate('/admin/inventario')
        }
    }

    return(
        <>
            <Header />
            <div className="container-fluid pt-4" style={{backgroundColor:'black'}}>
                <AdminNavegacion />
            </div>
            <div className="container-fluid pb-5 detalle">
                <div className="row">
                    <div className="col-lg-6 pt-4 detalle-divimg">
                        <img src={perfume.img} alt={perfume.nombre}/>
                    </div>
                    <div className=" pt-5 col-lg-6">
                        <h2>{perfume.nombre}</h2>
                        <h4>Marca: {perfume.marca}</h4>
                        <h4 className="pb-2">${perfume.precio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                        <h5 className="pb-2">{perfume.stock} Disponibles</h5>
                        <ContadorInput stock={perfume.stock} />
                        <Button className="btn-vk mt-3"><i className="fa-solid fa-bag-shopping"></i> Agregar al Pedido</Button>
                        <p className="pt-4">{perfume.descripcion}</p>
                        <p>Categoría: {perfume.categoria}</p>
                        <p>Condición: {perfume.condicion}</p>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <h2 className='center pt-4 pb-2'>Editar Información del Producto</h2>
                <div className="row">
                    <div className="col-md-6 center"><Button className={perfume.disponible ? "btn-success":"btn-danger"} onClick={()=>marcarDisponible(perfume._id)}>Disponible</Button></div>
                    <div className="col-md-6 center"><Button className={perfume.destacado ? "btn-success":"btn-danger"} onClick={()=>destacarPerfume(perfume._id)}>Destacar</Button></div>
                </div>
                <EditarPerfumeForm perfume={perfume}/>
            <div className="center">
                <Button className=" px-5 m-3 btn-danger" onClick={handleDelete}>Eliminar del Inventario</Button>
            </div>
            </div>
            <div className="container-fluid footer">
                <Footer />
            </div>
        </>
    )
}

export default EditarPerfume