import Dropdown from 'react-bootstrap/Dropdown'
import logo from '../assets/logo2.png'
import Login from './Login'
import {useState} from 'react'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const Header = () => {
    const [showLogin, setShowLogin] = useState(false)

    const abrirLogin = () => setShowLogin(true)
    const cerrarLogin = () => setShowLogin(false)

    return (
        <div className="row">
        <header className='container-fluid centernav fixed-top header col-6'>
            <Link to={'/'} onClick={()=>{ window.scrollTo({ top: 0})}}>
                <img src={logo} className='home' alt="VK Fragrance House" />
            </Link>
            <nav className='navbar'>
                <ul>
                    <li className='nav-ul-li'>
                        <HashLink smooth to="/#catalogo" scroll={(el)=>{setTimeout(()=>{el.scrollIntoView({behavior:'smooth', block:'start'})}, 100)}}>Perfumes</HashLink>
                    </li>
                    <li className='nav-ul-li'>
                        <HashLink smooth to="/#ubicacion" scroll={(el)=>{setTimeout(()=>{el.scrollIntoView({behavior:'smooth', block:'start'})}, 100)}}>Ubicacion</HashLink>
                    </li>
                    <li className='nav-ul-li'>
                        <Dropdown>
                            <Dropdown.Toggle className='nax v-link border-0 bg-transparent' id='dropdown-basic'>
                                <i className="fa-solid fa-bag-shopping"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='dropdown-box'>
                                <Dropdown.Item href="#/action-1">Mi Pedido</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Historial de Pedidos</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li className='nav-ul-li'>
                        <Dropdown>
                            <Dropdown.Toggle className="nav-link border-0 bg-transparent" id="dropdown-basic">
                                <i className="fa-solid fa-user"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='dropdown-box'>
                                <Dropdown.Item href="#/action-1">Ajustes</Dropdown.Item>
                                <Dropdown.Item onClick={abrirLogin}>Iniciar Sesión / Registrarse</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </nav>
        </header>
        <Login show={showLogin} handleClose={cerrarLogin} />
        </div>
    )
}

export default Header