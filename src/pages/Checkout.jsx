import {useEffect, useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'    
import Header from '../components/Header'
import Footer from '../components/Footer'
import AddPedidoForm from '../components/AddPedidoForm'
import CheckoutLista from '../components/CheckoutLista'
import { GlobalContext } from '../context/GlobalState'
import imagenCheck from '../assets/check.png'

const Checkout = () => {
    
    const {perfumesPedido} = useContext(GlobalContext)
    const [pedidoCompletado, setPedidoCompletado] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }, [])

    useEffect(() => {
        if(perfumesPedido.length === 0 && !pedidoCompletado) navigate('/')
    }, [perfumesPedido])

    let total = 0
    for(let perfume of perfumesPedido){
        total += (perfume.precio*perfume.cantidad)
    }

  return (
    <>
        <Header />
        <div className="detalle">
            <div className="container">
                {pedidoCompletado ? (
                        <div className="center2 py-5">
                            <img src={imagenCheck} alt="Exito" style={{height:'100px'}}/>
                            <h2 className='pt-5'>¡Tu pedido se ha creado exitosamente!</h2>
                            <h5>Pronto nos pondremos en contacto contigo.</h5>
                            <Link to="/"><button className="btn-vk mt-3 px-5">Regresar al Inicio</button></Link>
                        </div>
                ) : (
                    <div className="row">
                        <div className="col-md-7 col-lg-8 px-5">
                            <AddPedidoForm onPedidoCompletado={() => setPedidoCompletado(true)} />
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="row mt-2">
                                <div className="col-9"><h5>Producto</h5></div>
                                <div className="col-3"><h5>Total</h5></div>
                                <hr />
                            </div>
                            <CheckoutLista perfumes={perfumesPedido} />
                            <div className="center mt-5">
                                <h4>Total del Pedido: ${total.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </div>
            <div className="footer container-fluid"><Footer /></div>
    </>
  )
}

export default Checkout