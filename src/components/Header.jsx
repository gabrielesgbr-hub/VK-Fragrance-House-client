import logo from '../assets/logo2.png'
import { useState, useContext } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import PerfumePedidoLista from './PerfumePedidoLista'
import { GlobalContext } from '../context/GlobalState'

const Header = () => {
    const [pedidoAbierto, setPedidoAbierto] = useState(false)
    const {perfumesPedido} = useContext(GlobalContext)
    
    let subtotal = 0
    for(let perfume of perfumesPedido){
        subtotal += (perfume.precio*perfume.cantidad)
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" className="header">
                <Container fluid className="d-flex flex-column align-items-center">
                    <Navbar.Brand as={Link} to="/" onClick={() => window.scrollTo({ top: 0 })} className="mx-0">
                        <img src={logo} className='home' alt="VK Fragrance House"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 bg-light mt-2" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="w-100">
                        <Nav className="mx-auto justify-content-center align-items-center w-100 ">
                            <Link to={'/tienda'} className='nav-ul-li'>Tienda</Link>
                            <Nav.Link as={HashLink} smooth to="/#ubicacion" className='nav-ul-li px-5' scroll={(el)=>{setTimeout(()=>{el.scrollIntoView({behavior:'smooth', block:'start'})}, 500)}}>Ubicación</Nav.Link>
                            <button className="nav-ul-li px-3 border-0 bg-transparent" onClick={() => setPedidoAbierto(true)}>
                                <i className="fa-solid fa-bag-shopping"></i>
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {pedidoAbierto && (
                <>
                    <div className="drawer-overlay" onClick={() => setPedidoAbierto(false)}/>
                    <div className='drawer container'>
                        <div className="row mb-4">
                            <h5 className='col-10' style={{alignContent:'end'}}>Mi Pedido</h5>
                            <Button className='btn-dark col-2 mb-2' onClick={() => setPedidoAbierto(false)}>✕</Button>
                        </div>
                        {perfumesPedido.length > 0 ? (
                            <>
                                <PerfumePedidoLista perfumes={perfumesPedido} />
                                <div className='mt-4 mx-3 pt-3'>
                                    <h5><strong>Subtotal: </strong>${subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h5>
                                </div>
                                <div className="center mt-4">
                                    <Link to="/pedido"><Button className='btn-vk m-1'>Ver pedido completo</Button></Link>
                                    <Link to="/checkout"><Button className='btn-vk m-2'>Finalizar pedido</Button></Link>
                                </div>
                            </>
                        ) : (
                            <div className='center mt-5 pt-5'>
                                <h1><i className="fa-solid fa-bag-shopping"></i></h1>
                                <p className="center">Tu pedido está vacío</p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    )
}

export default Header