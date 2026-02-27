import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const PerfumeItem = ({item}) => {
    return (
        <Card className="mb-3 card">
            <Card.Img src={item.img} alt={item.name} className='card-img' />
            <Card.Body className="text-center">
                <Card.Title className='card-title'>
                    <Link to={`/producto/${item._id}`}>{item.nombre}</Link>
                </Card.Title>
                <Card.Body>
                    {item.categoria} <br />
                    {item.precio}
                </Card.Body>
                <Button className="btn-vk w-100"><i className="fa-solid fa-bag-shopping"></i> Agregar al Pedido</Button>
            </Card.Body>
        </Card>
    )
}

export default PerfumeItem