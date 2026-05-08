import Header from "../components/Header"
import Footer from "../components/Footer"
import ReactMarkdown from 'react-markdown'
import contenido from '../legal/aviso.md?raw'

const AvisoPrivacidad = () => {
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

export default AvisoPrivacidad