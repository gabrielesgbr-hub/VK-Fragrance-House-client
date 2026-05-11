import { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PerfumeMiPedidoLista from '../components/PerfumeMiPedidoLista'
import { GlobalContext } from '../context/GlobalState'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Pedido = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }, [])

    const {perfumesPedido} = useContext(GlobalContext)

    let subtotal = 0
    for(let perfume of perfumesPedido){
        subtotal += (perfume.precio*perfume.cantidad)
    }

  return (
    <>
        <div className="container-fluid">
            <Header/>
        </div>
        <div className="container-fluid detalle">
            <div className="container pt-4">
                <h2>Mi Pedido</h2>
                {perfumesPedido.length > 0 ? (
                    <div className="row mt-4">
                        <div className="col-lg-8">
                            <div className="row center">
                                <div className="col-4 col-md-6"><h5>Producto</h5></div>
                                <div className="col-2 col-md-1"><h5>Precio</h5></div>
                                <div className="col-4 col-md-3"><h5>Cantidad</h5></div>
                                <div className="col-2 col-md-2"><h5>Total</h5></div>
                                <hr className='mt-2' />
                            </div>
                            <PerfumeMiPedidoLista perfumes={perfumesPedido}/>
                        </div>
                        <div className="col-lg-4 px-5 my-5 center">
                            <h4 className='mx-5 mt-4'>Total:&emsp; <strong>${subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></h4>
                            <Link to="/checkout"><Button className='btn-vk mx-5 mt-4'>Finalizar Pedido</Button></Link>
                            <Link to="/tienda"><Button className='btn-vk mx-5 mt-3'>Seguir Comprando</Button></Link>
                        </div>
                    </div>
                ) : (
                    <div className="center2 py-5">
                        <h5>Tu pedido actualmente está vacío</h5>
                        <Link to="/tienda"><Button className='btn-vk mt-3'>Seguir Comprando</Button></Link>
                    </div>
                )}
            </div>
        </div>
        <div className="container-fluid footer">
            <Footer/>
        </div>
    </>
  )
}

export default Pedido