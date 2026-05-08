import { useContext } from 'react'
import Header from './components/Header'
import Carrusel from './components/Carrusel'
import PerfumesGrid from './components/PerfumesGrid'
import Ubicacion from './components/Ubicacion'
import Footer from './components/Footer'
import { GlobalContext} from './context/GlobalState'
import logo1 from './assets/afnanlogo.webp'
import logo2 from './assets/armaflogo.png'
import logo3 from './assets/lattafalogo.svg'

const App = () => {
    const {perfumes} = useContext(GlobalContext)
    if (!perfumes) return <p>Cargando perfumes...</p>

    let destacados = []
    for (let perfume of perfumes){
        if(perfume.destacado){
            destacados.push(perfume)
        }
    }

    return (
        <>
            <div className="container-fluid p-0">
                <Header />
                <Carrusel />
            </div>
            <div className="container" id="catalogo">
                <h1 className='mb-4 center h1-catalogo'>Perfumes Destacados</h1>
                <PerfumesGrid perfumes = {destacados}/>
            </div>
            <div className='pt-3'>
                <h1 className='mb-4 center mt-5'>Algunas de Nuestras Marcas</h1><hr />
                <div className='logos-container' style={{alignItems:'center'}}>
                    <img src={logo1} className='logo1' alt="Afnan"/>
                    <img src={logo2} className='logo2' alt="Armaf" />
                    <img src={logo3} className='logo3' alt="Lattafa"/>
                </div>
            </div>
            <div className="container-fluid" id='ubicacion'>
                <Ubicacion />
            </div>
            <div className="container-fluid footer">
                <Footer />
            </div>
        </>
    )
}

export default App