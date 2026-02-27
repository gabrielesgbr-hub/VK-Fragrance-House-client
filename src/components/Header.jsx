import logo from '../assets/logo2.png'
import Login from './Login'
import {useState} from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap'

const Header = () => {
    const [showLogin, setShowLogin] = useState(false)

    const abrirLogin = () => setShowLogin(true)
    const cerrarLogin = () => setShowLogin(false)

    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className="header">
            <Container fluid className="d-flex flex-column align-items-center">
                <Navbar.Brand as={Link} to="/" onClick={() => window.scrollTo({ top: 0 })} className="mx-0">
                    <img src={logo} className='home' alt="VK Fragrance House" style={{ margin: '0 auto' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 bg-light mt-2" />
                <Navbar.Collapse id="responsive-navbar-nav" className="w-100">
                    <Nav className="mx-auto justify-content-center align-items-center w-100 ">
                        <Nav.Link as={HashLink} smooth to="/#catalogo" className='nav-ul-li px-3' scroll={(el)=>{setTimeout(()=>{el.scrollIntoView({behavior:'smooth', block:'start'})}, 300)}}>Perfumes</Nav.Link>
                        <Nav.Link as={HashLink} smooth to="/#ubicacion" className='nav-ul-li px-3' scroll={(el)=>{setTimeout(()=>{el.scrollIntoView({behavior:'smooth', block:'start'})}, 1000)}}>Ubicación</Nav.Link>
                        <div className="d-flex justify-content-center">
                            <Dropdown as={Nav.Item} className='nav-ul-li px-2'>
                                <Dropdown.Toggle className='nav-link border-0 bg-transparent dropdown-color' id='dropdown-shopping'>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='dropdown-box'>
                                    <Dropdown.Item href="#/action-1">Mi Pedido</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Historial de Pedidos</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as={Nav.Item} className='nav-ul-li px-2'>
                                <Dropdown.Toggle className="nav-link border-0 bg-transparent dropdown-color" id="dropdown-user">
                                    <i className="fa-solid fa-user"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='dropdown-box'>
                                    <Dropdown.Item href="#/action-1">Ajustes</Dropdown.Item>
                                    <Dropdown.Item onClick={abrirLogin}>Iniciar Sesión / Registrarse</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Login show={showLogin} handleClose={cerrarLogin} />
        </Navbar>
    )
}

export default Header