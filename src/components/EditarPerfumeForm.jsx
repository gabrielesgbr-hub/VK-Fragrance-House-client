import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const EditarPerfumeForm = ({perfume}) => {
    const [nombre, setNombre] = useState(perfume.nombre)
    const [sku, setSKU] = useState(perfume.sku)
    const [precio, setPrecio] = useState(perfume.precio)
    const [categoria, setCategoria] = useState(perfume.categoria)
    const [marca, setMarca] = useState(perfume.marca)
    const [condicion, setCondicion] = useState(perfume.condicion)
    const [img, setImg] = useState(perfume.img)
    const [descripcion, setDescripcion] = useState(perfume.descripcion)
    const [stock, setStock] = useState(perfume.stock)
    const [error, setError] = useState("")

    const {updatePerfume} = useContext(GlobalContext)

    const onSubmit = async (e) => {
        e.preventDefault()

        const perfumeActualizado = {
            nombre,
            sku,
            precio: +precio,
            categoria,
            marca,
            condicion,
            img,
            descripcion,
            stock: +stock
        }

        const error = await updatePerfume(perfumeActualizado, perfume._id)

        if(error){
            setError(error)
            return
        }

        setError("")
    }

  return (
    <Form onSubmit={onSubmit} className='row'>
        <Form.Group className="p-4 col-md-6">
            <Form.Label htmlFor='nombre'>Nombre del Perfume:</Form.Label>
            <Form.Control id='nombre' value={nombre} className='formcontrol' type="text" onChange={(e) => setNombre(e.target.value)}/>
        </Form.Group>
        <Form.Group className="p-4 col-md-6">
            <Form.Label htmlFor='marca'>Marca:</Form.Label>
            <Form.Control id='marca' value={marca} className='formcontrol' type='text'onChange={(e) => setMarca(e.target.value)}/>
        </Form.Group>
        <Form.Group className="p-4 col-md-6">
            <Form.Label htmlFor='categoria'>Categoría:</Form.Label>
            <Form.Select id='categoria' value={categoria} className='formcontrol' onChange={(e) => setCategoria(e.target.value)}>
                <option value="">Selecciona una categoría</option>
                <option value="Dama">Dama</option>
                <option value="Caballero">Caballero</option>
                <option value="Unisex">Unisex</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="p-4 col-md-6">
            <Form.Label htmlFor='condicion'>Condición:</Form.Label>
            <Form.Control id='condicion' value={condicion} className='formcontrol' type='text' onChange={(e) => setCondicion(e.target.value)}/>
        </Form.Group>
        <Form.Group className="p-4 col-md-6">
            <Form.Label htmlFor='sku'>SKU:</Form.Label>
            <Form.Control id='sku' value={sku} className='formcontrol' type='text' onChange={(e) => setSKU(e.target.value)}/>
        </Form.Group>
        <Form.Group className="p-4 col-md-6">
            <Form.Label htmlFor='img'>Enlace de la Imagen:</Form.Label>
            <Form.Control id='img' value={img} className='formcontrol' type='text' onChange={(e) => setImg(e.target.value)}/>
        </Form.Group>
        <Form.Group className="p-4 col-md-6">
            <Form.Label htmlFor='stock'>Stock:</Form.Label>
            <Form.Control id='stock' value={stock} className='formcontrol' type='text' placeholder='Ingresar números enteros ej. 10, 15, 32' onChange={(e) => setStock(e.target.value)}/>
        </Form.Group>
        <Form.Group className="p-4 col-md-6">
            <Form.Label htmlFor='precio'>Precio:</Form.Label>
            <Form.Control id='precio' value={precio} className='formcontrol' type='text' placeholder='Ingresar valores numéricos ej. 500, 1150, 329.99' onChange={(e) => setPrecio(e.target.value)}/>
        </Form.Group>
        <Form.Group className="p-4">
            <Form.Label htmlFor='descripcion'>Descripción:</Form.Label>
            <Form.Control id='descripcion' value={descripcion} as='textarea' rows={4} className='formcontrol' type='text' onChange={(e) => setDescripcion(e.target.value)}/>
        </Form.Group>
        <div className="center">
            <div className='m-2' style={{color:'#ED3C21'}}>{error}</div>
            <Button type="submit" className='btn-vk m-3 px-5'>Actualizar Info. del Producto</Button>
        </div>
    </Form>
  )
}

export default EditarPerfumeForm