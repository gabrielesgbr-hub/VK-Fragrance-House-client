import ReactMarkdown from 'react-markdown'
import contenido from '../legal/envios.md?raw'
import Header from '../components/Header'
import Footer from '../components/Footer'

const EnviosDevoluciones = () => {
  return (
    <>
        <div className="container-fluid">
            <Header />
        </div>
        <div className="container-fluid legal">
            <ReactMarkdown>{contenido}</ReactMarkdown>
        </div>
        <div className="container-fluid footer">
            <Footer />
        </div>
    </>
  )
}

export default EnviosDevoluciones