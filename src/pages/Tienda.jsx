import { useState, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'
import Header from '../components/Header'
import PerfumesGrid from '../components/PerfumesGrid'
import Footer from '../components/Footer'
import Search from '../components/Search'

const Tienda = () => {  
    const {perfumes} = useContext(GlobalContext)

    let perfumesDisponibles = []
    
    for (let perfume of perfumes){
        if(perfume.disponible){
            perfumesDisponibles.push(perfume)
        }
    }

    const [resultados, setResultados] = useState(perfumesDisponibles)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }, [])

    useEffect(() => {
        setResultados(perfumesDisponibles)
    }, [perfumes])

    const handleSearch = (query, categorias, marcas) => {
        let filtrados = perfumesDisponibles.filter(item => item.nombre.toLowerCase().includes(query.toLowerCase()) || item.descripcion.toLowerCase().includes(query.toLowerCase()))

        if(categorias.length > 0){
            filtrados = filtrados.filter(item => categorias.includes(item.categoria))
        }

        if(marcas.length > 0){
            filtrados = filtrados.filter(item => marcas.includes(item.marca))
        }

        setResultados(filtrados)
    }

    if (!perfumes) return <p>Cargando perfumes...</p>

    return(
        <>
            <div className="container-fluid">
                <Header />
            </div>
            <div className="container-fluid">
                <div className="row" style={{minHeight:'550px'}}>
                    <div className="col-lg-2 py-4 px-4">
                        <Search onSearch={handleSearch}/>
                    </div>
                    <div className="col-lg-10 py-4" style={{backgroundColor:'white'}}><PerfumesGrid perfumes={resultados}/></div>
                </div>
            </div>
            <div className="container-fluid footer">
                <Footer />
            </div>
        </>
    )
}

export default Tienda