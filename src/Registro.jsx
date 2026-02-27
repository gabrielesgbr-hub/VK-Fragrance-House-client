import Header from "./components/Header"
import Footer from "./components/Footer"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Registro = () =>{
    return(
        <>
            <Header />
            <div className="container-fluid pb-4 pt-4 registroform">
                <h1>Crea tu Cuenta</h1>
                <Form className="row">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo Electrónico:</Form.Label>
                        <Form.Control type="email" placeholder="*Obligatorio"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control type='password'placeholder='*Obligatorio'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Confirma tu Contraseña:</Form.Label>
                        <Form.Control type='password'placeholder='*Obligatorio'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre(s):</Form.Label>
                        <Form.Control type="text" placeholder="*Obligatorio"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Apellido(s):</Form.Label>
                        <Form.Control type="text" placeholder="*Obligatorio"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Teléfono:</Form.Label>
                        <Form.Control type="tel" placeholder="10 dígitos *Puedes agregarlo más tarde en Ajustes"/>
                    </Form.Group>
                    <div className="mb-1">Dirección: *Puedes agregarla más tarde en Ajustes, debe ubicarse en Mérida, Yucatán</div>
                    <Form.Group className="mb-3 col-sm-6" controlId="exampleForm.ControlInput1">
                        <div>
                            <Form.Label>Calle:</Form.Label>
                            <Form.Control type="text"/>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-6" controlId="exampleForm.ControlInput1">
                        <div>
                            <Form.Label>Cruces/Referencias:</Form.Label>
                            <Form.Control type="text" placeholder="Ej. entre Calles 57 y 52B"/>                            
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <div>
                            <Form.Label>Colonia/Fraccionamiento:</Form.Label>
                            <Form.Control type="text"/> 
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-6">
                        <div>
                            <Form.Label>Código Postal:</Form.Label>
                            <Form.Control type="number"/> 
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-6">
                        <div>
                            <Form.Label>Número Exterior:</Form.Label>
                            <Form.Control type="number"/> 
                        </div>
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button className='btn-vk2'>Regístrate</Button>
                    </div>
                </Form>
            </div>
            <Footer />
        </>
    )
}

export default Registro

// Nombre completo de quien recibe.

// Calle y Número (Exterior e Interior).

// Entre qué calles (Cruces/Referencias). Esto es vital para negocios pequeños.

// Colonia / Fraccionamiento.

// Código Postal (CP).

// Ciudad y Estado.

// Número de teléfono (Obligatorio para que el repartidor llame si no encuentra la casa).