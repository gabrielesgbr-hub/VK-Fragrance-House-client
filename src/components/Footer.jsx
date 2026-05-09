import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'

function Footer () {
    return(
        <footer>
            <div className="row">
                <img src={logo} alt="" className="col-sm-3 footer-img"/>
                <ul className="col-sm-3">
                    <h5>¿Preguntas? Contáctanos</h5>
                    <li><i className="fa-brands fa-instagram"></i><a target="_blank" href="https://www.instagram.com/vk_fragrancehouse" rel="noopener" className='footer-li'> vk_fragrancehouse</a></li>
                    <li><i className="fa-brands fa-facebook"></i><a target="_blank" href="https://www.facebook.com/share/1Bh4hjBwhJ/?mibextid=wwXIfr" rel="noopener" className='footer-li'> VK Fragrance House</a></li>
                    <li><i className="fa-brands fa-whatsapp"></i><a target="_blank" href="https://wa.me/529811032985?text=Hola%20VK%20Fragrance,%20me%20gustaría%20saber%20más%20sobre%20sus%20perfumes" rel="noopener" className='footer-li'> +52 981 103 2985</a></li>
                    <li><i className="fa-solid fa-envelope"></i> vkfragrancehouse@gmail.com</li>
                </ul>
                <ul className="col-sm-3">
                    <h5>Información Legal</h5>
                    <li><Link className='footer-li' to={'/aviso-privacidad'}>Aviso de Privacidad</Link></li>
                    <li><Link className='footer-li' to={'/terminos-condiciones'}>Términos y Condiciones</Link></li>
                    <li><Link className='footer-li' to={'/envios-devoluciones'}>Envíos y Devoluciones</Link></li>
                </ul>
                <ul className="col-sm-3">
                    <h5>Métodos de Pago</h5>
                    <li><i className="fa-brands fa-cash-app"></i> Transferencia</li>
                    <li><i className="fa-solid fa-money-bill"></i> Efectivo</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer