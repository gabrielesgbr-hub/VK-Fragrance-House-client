import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';

function Login({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className='login'>
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body className='login'>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo Electrónico:</Form.Label>
            <Form.Control type="email" placeholder="Correo Electrónico *Obligatorio" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control type='password'placeholder='Contraseña *Obligatorio' />
          </Form.Group>
          <Button className='btn-vk' style={{height:'35px', width:'100%'}}>Iniciar Sesión</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className='login-foot'>
        <div>¿Has olvidado tu contraseña? <a href="">Recuperar contraseña</a></div>
        <div>¿No tienes una cuenta? <Link to={'/registro'} onClick={()=>{ window.scrollTo({ top: 0})}}>Regístrate</Link></div>
      </Modal.Footer>
    </Modal>
  );
}

export default Login