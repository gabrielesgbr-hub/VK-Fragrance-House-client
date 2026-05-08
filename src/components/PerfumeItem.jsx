import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const PerfumeItem = ({perfume}) => {
    const {agregarAlPedido} = useContext(GlobalContext)
    
    return (
        <Card className="card">
            <Card.Img src={perfume.img} alt={perfume.name} className='card-img' />
            <Card.Body className="text-center">
                <Card.Title className='card-title'>
                    <Link to={`/perfume/${perfume._id}`}>{perfume.nombre}</Link>
                </Card.Title>
                <Card.Body>
                    {perfume.categoria} <br />
                    ${perfume.precio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Card.Body>
                <Button className="btn-vk w-100" onClick={() => agregarAlPedido(perfume)}><i className="fa-solid fa-bag-shopping"></i> Agregar al Pedido</Button>
            </Card.Body>
        </Card>
    )
}

export default PerfumeItem