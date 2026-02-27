import { useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'
import Carrusel from './components/Carrusel'
import PerfumesGrid from './components/PerfumesGrid'
import Ubicacion from './components/Ubicacion'
import Footer from './components/Footer'

const App = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
    const fetchItems = async () => {
        const resultado = await axios.get('/perfumes.json')
        console.log(resultado)
        setItems(resultado.data)
        setIsLoading(false)
    }

    fetchItems()
    },[])

    return (
        <>
        <div className="container-fluid p-0">
            <Header />
            <Carrusel />
        </div>
        <div className="container" id="catalogo">
            <h1 className='mb-4 center h1-catalogo'>Catálogo de Perfumes</h1>
            <PerfumesGrid isLoading={isLoading} items={items} />
        </div>
        <div className="container-fluid" id='ubicacion'>
            <Ubicacion />
        </div>
        <div className="container-fluid">
            <Footer />
        </div>
        </>
    )
}

export default App