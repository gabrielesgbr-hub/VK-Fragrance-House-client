import logo from '../assets/logo2.png'

function Footer () {
    return(
        <footer className="footer">
            <div className="container row">
                <img src={logo} alt="" className="col-sm-4 col-5" style={{height:'120px', objectFit:'contain'}} />
                <ul className="col-sm-4 col-7">
                    <h5>¿Preguntas? Contáctanos</h5>
                    <li><i className="fa-brands fa-instagram"></i><a target="_blank" href="https://www.instagram.com/vk_fragrancehouse" rel="noopener" className='footer-li'> vk_fragrancehouse</a></li>
                    <li><i className="fa-brands fa-facebook"></i><a target="_blank" href="https://www.facebook.com/share/1Bh4hjBwhJ/?mibextid=wwXIfr" rel="noopener" className='footer-li'> VK Fragrance House</a></li>
                    <li><i className="fa-brands fa-whatsapp"></i><a target="_blank" href="https://wa.me/529811921780?text=Hola%20VK%20Fragrance,%20me%20gustaría%20saber%20más%20sobre%20sus%20perfumes" rel="noopener" className='footer-li'> +52 981 192 1780</a></li>
                    <li><i className="fa-solid fa-envelope"></i> vkfragrancehouse@gmail.com</li>
                </ul>
                <ul className="col-sm-4">
                    <h5>Métodos de Pago</h5>
                    <li><img src="https://img.icons8.com/color/48/mercado-pago.png" alt="Mercado Pago" width="24" /> Mercado Pago</li>
                    <li><i className="fa-solid fa-credit-card"></i> Tarjeta de crédito/débito</li>
                    <li><i className="fa-solid fa-money-bill"></i> Efectivo</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer