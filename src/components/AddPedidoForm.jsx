import { useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ModalConfirmacion from './ModalConfirmacion'

const AddPedidoForm = ({ onPedidoCompletado }) => {
    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [metodo, setMetodo] = useState("")
    const [metodo_pago, setMetodoPago] = useState("")
    const [calle, setCalle] = useState("")
    const [referencias, setReferencias] = useState("")
    const [cp, setCP] = useState("")
    const [no, setNo] = useState("")
    const [colonia, setColonia] = useState("")
    const [puntoEntrega, setPuntoEntrega] = useState("")
    const [error, setError] = useState("")

    const [modalActivado, setModalActivado] = useState(false)

    function setTodo(set) {
        setNombre(set)
        setApellidos(set)
        setTelefono(set)
        setEmail(set)
        setMetodo(set)
        setMetodoPago(set)
        setCalle(set)
        setReferencias(set)
        setCP(set)
        setNo(set)
        setColonia(set)
        setPuntoEntrega(set)
        setError(set)
    }

    const {createPedido, perfumesPedido, vaciarPedido} = useContext(GlobalContext)

    const productos = perfumesPedido.map(perfume => ({
        producto: perfume._id,
        cantidad: perfume.cantidad
    }))

    const onSubmit = async (e) => {
        e.preventDefault()

        if (metodo === "Punto_Entrega"){
            const campos = {nombre, apellidos, telefono, puntoEntrega, metodo_pago}
            const vacios = Object.keys(campos).filter(key => campos[key] === "")

            if (vacios.length >0) {
                setError('Llenar todos los campos marcados con *')
                setModalActivado(false)
                return
            }
            
            const nombreCompleto = nombre + " " + apellidos

            const nuevoPedido = {
                nombre: nombreCompleto,
                telefono,
                productos,
                metodo_pago,
                direccion: puntoEntrega
            }

            const error = await createPedido(nuevoPedido)

            if(error){
                setError(error)
                return
            }

            setTodo("")
            setModalActivado(false)
            vaciarPedido()
            onPedidoCompletado()
            window.scrollTo({ top: 0, behavior: 'instant' })
        } else if (metodo === "Direccion") {
            const campos = {nombre, apellidos, telefono, calle, cp, no, colonia, metodo_pago}
            const vacios = Object.keys(campos).filter(key => campos[key] === "")

            if (vacios.length >0) {
                setError('Llenar todos los campos marcados con *')
                setModalActivado(false)
                return
            }

            const nombreCompleto = nombre + " " + apellidos
            const direccion = calle + " " + no + " " + cp + " " + referencias

            const nuevoPedido = {
                nombre: nombreCompleto,
                telefono,
                productos,
                metodo_pago,
                direccion: direccion
            }

            const error = await createPedido(nuevoPedido)

            if(error){
                setError(error)
                return
            }

            setTodo("")
            vaciarPedido()
            onPedidoCompletado()
        } else if (metodo === "") {
            setError('Llenar todos los campos marcados con *')
            setModalActivado(false)
            return
        }
    }
    
  return (
    <>
        <Form onSubmit={onSubmit} className='row'>
            <h3 className='mt-5 px-4'>Contacto</h3>
            <Form.Group className="p-4 col-md-6">
                <Form.Label htmlFor='nombre'>Nombre *</Form.Label>
                <Form.Control id='nombre' value={nombre} className='formcontrol' type="text" onChange={(e) => setNombre(e.target.value)}/>
            </Form.Group>
            <Form.Group className="p-4 col-md-6">
                <Form.Label htmlFor='apellidos'>Apellidos *</Form.Label>
                <Form.Control id='apellidos' value={apellidos} className='formcontrol' type='text'onChange={(e) => setApellidos(e.target.value)}/>
            </Form.Group>
            <Form.Group className="p-4 col-md-6">
                <Form.Label htmlFor='telefono'>Teléfono *</Form.Label>
                <Form.Control id='telefono' value={telefono} className='formcontrol' type='Number' placeholder='10 dígitos' onChange={(e) => setTelefono(e.target.value)}/>
            </Form.Group>
            <Form.Group className="p-4 col-md-6">
                <Form.Label htmlFor='email'>Email (opcional)</Form.Label>
                <Form.Control id='email' value={email} className='formcontrol' type='email' onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <h3 className='mt-4 px-4'>Entrega</h3>
            <Form.Group className="p-4">
                <Form.Label htmlFor='metodoPago'>Método de Pago *</Form.Label>
                <Form.Select id='metodoPago' value={metodo_pago} className='formcontrol' onChange={(e) => setMetodoPago(e.target.value)}>
                    <option value="">Seleccionar Método de Pago</option>
                    <option value="Efectivo">Efectivo</option>
                    <option value="Transferencia">Transferencia</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="p-4">
                <Form.Label htmlFor='metodo'>Método de Entrega *</Form.Label>
                <Form.Select id='metodo' value={metodo} className='formcontrol' onChange={(e) => setMetodo(e.target.value)}>
                    <option value="">Seleccionar Método de Entrega</option>
                    <option value="Punto_Entrega">Punto de Entrega</option>
                    <option value="Direccion">Ingresar Dirección</option>
                </Form.Select>
            </Form.Group>
            {metodo === 'Direccion' && (
                <>
                    <Form.Group className="p-4 col-md-6">
                        <Form.Label htmlFor='calle'>Calle *</Form.Label>
                        <Form.Control id='calle' value={calle} className='formcontrol' onChange={(e) => setCalle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="p-4 col-md-6">
                        <Form.Label htmlFor='referencias'>Cruces/Referencias (opcional)</Form.Label>
                        <Form.Control id='referencias' value={referencias} className='formcontrol' type='text' onChange={(e) => setReferencias(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="p-4 col-md-6">
                        <Form.Label htmlFor='cp'>Código Postal *</Form.Label>
                        <Form.Control id='cp' value={cp} className='formcontrol' placeholder='Mérida, Yucatán' type='text' onChange={(e) => setCP(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="p-4 col-md-6">
                        <Form.Label htmlFor='no'>Número Exterior *</Form.Label>
                        <Form.Control id='no' value={no} className='formcontrol' type='Number' onChange={(e) => setNo(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="p-4">
                        <Form.Label htmlFor='colonia'>Colonia/Fraccionamiento *</Form.Label>
                        <Form.Control id='colonia' value={colonia} className='formcontrol' type='text' onChange={(e) => setColonia(e.target.value)}/>
                    </Form.Group>
                </>
            )}

            {metodo === 'Punto_Entrega' && (
                <Form.Group className="p-4">
                    <Form.Label htmlFor='puntoEntrega'>Punto de Entrega *</Form.Label>
                    <Form.Select id='puntoEntrega' value={puntoEntrega} className='formcontrol' onChange={(e) => setPuntoEntrega(e.target.value)}>
                        <option value="">Selecciona el Punto de Entrega</option>
                        <option value="Calle 17B 101E Colonia Itzimná 97100">Calle 17B 101E Colonia Itzimná 97100</option>
                        <option value="Campus De Ciencias Sociales, Económicas Administrativas y Humanidades UADY">Campus De Ciencias Sociales, Económicas Administrativas y Humanidades UADY</option>
                        <option value="Plaza Las Américas">Plaza Las Américas</option>
                        <option value="Plaza Altabrisa">Plaza Altabrisa</option>
                        <option value="Zona Centro">Zona Centro</option>
                    </Form.Select>
                </Form.Group>
            )}
            <div className="center">
            <div className='m-2' style={{color:'#ED3C21'}}>{error}</div>
                <Button className='btn-vk mt-3 mb-5 px-5' onClick={() => setModalActivado(true)}>Realizar el Pedido</Button>
            </div>
        </Form>
        <ModalConfirmacion 
            activo={modalActivado} 
            onCerrar={() => setModalActivado(false)}
            onSubmit={onSubmit} 
        />
    </>
  )
}

export default AddPedidoForm