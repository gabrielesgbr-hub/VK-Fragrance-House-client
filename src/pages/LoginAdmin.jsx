import { GlobalContext } from '../context/GlobalState';
import {useState, useContext} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer';

const LoginAdmin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const {loginAdmin} = useContext(GlobalContext)
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()

    const credenciales = {
      email,
      password
    }

    const error = await loginAdmin(credenciales)

    if (error){
      setError(error)
      setPassword('')
      return
    }

    navigate('/admin/inventario') 
    setEmail('')
    setPassword('')
    setError('')
}

  return (
    <>
      <div className="container-fluid">
        <Header />
      </div>
      <div className='container'>
          <h2 className='center'>Iniciar Sesión</h2>
          <Form onSubmit={onSubmit}>
            <Form.Group className="p-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo Electrónico:</Form.Label>
              <Form.Control className='formcontrol' type="email" placeholder="Correo Electrónico *Obligatorio" value={email}
              onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="p-4" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control className='formcontrol' type='password'placeholder='Contraseña *Obligatorio' value={password}
              onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <div className="center">
              <div className='m-2' style={{color:'#ED3C21'}}>
                {error}
              </div>
              <Button type="submit" className='btn-vk m-3'>Iniciar Sesión</Button>
            </div>
          </Form>
      </div>
      <div className="container-fluid footer">
        <Footer />
      </div>
    </>
  )
}

export default LoginAdmin