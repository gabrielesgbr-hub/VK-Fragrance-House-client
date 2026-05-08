import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { GlobalContext } from "../context/GlobalState"

const RutaAdmin = ({children}) => {
    const { adminAutenticado } = useContext(GlobalContext)
    
    if (!adminAutenticado) return <Navigate to="/admin/login" />
    
    return children
}

export default RutaAdmin