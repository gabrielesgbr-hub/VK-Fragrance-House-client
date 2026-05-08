import { useContext } from 'react'
import AdminNavegacion from '../components/AdminNavegacion'
import AddPerfumeForm from '../components/AddPerfumeForm'
import PerfumesLista from '../components/PerfumesLista'
import { GlobalContext } from '../context/GlobalState'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PanelAdmin = () => {
  const {perfumes} = useContext(GlobalContext)
  if(!perfumes) return <p>Cargando perfumes...</p>

  return (
    <>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="container-fluid pt-4" style={{backgroundColor:'black'}}>
        <AdminNavegacion />
      </div>
      <h2 className='center pt-4 pb-2'>Gestión de Inventario</h2>
      <div className="container center pb-4">
        <ul className="lista" style={{backgroundColor:'#ECEED9'}}>
          <li>
            <div className='col-md-2'><strong>NOMBRE</strong></div>
            <div className='col-md-1'><strong>MARCA</strong></div>
            <div className='col-md-1'><strong>SKU</strong></div>
            <div className='col-md-1'><strong>CATEGORÍA</strong></div>
            <div className='col-md-1'><strong>PRECIO</strong></div>
            <div className='col-md-1'><strong>STOCK</strong></div>
            <div className="col-md-2"><strong>DISPONIBILIDAD</strong></div>
            <div className="col-md-1"><strong>DESTACAR</strong></div>
            <div className="col-md-2"><strong>EDITAR</strong></div>
          </li>
        </ul>
        <PerfumesLista perfumes={perfumes}/>
      </div>
      <h2 className='center pt-4 pb-2'>Agregar Perfume al Inventario</h2>
      <div className="container">
        <AddPerfumeForm />
      </div>
      <div className="container-fluid footer">
        <Footer />
      </div>
    </>
  )
}

export default PanelAdmin