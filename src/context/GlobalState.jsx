import {createContext, useReducer, useEffect} from "react"
import AppReducer from './AppReducer'

const initialState = {
    perfumes: [],
    perfumesPedido: JSON.parse(localStorage.getItem('perfumesPedido')) || [],
    pedidos: [],
    loading: true,
    error: null,
    adminAutenticado: !!localStorage.getItem('token'),
    token: localStorage.getItem('token') || null
}

const API_URL = 'https://vk-fragrance-house-server.onrender.com'

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        getPerfumes()
    }, [])

    async function getPerfumes() {
        try{
            const response = await fetch (`${API_URL}/api/perfumes`, {method: 'GET'})
            const data = await response.json()

            dispatch({
                type:'GET_PERFUMES',
                payload: data
            })

        } catch (error) {
            dispatch({
                type: 'ERROR_PERFUMES',
                payload: error.message
            })
        }        
    }

    async function createPerfumes(perfume) {
        try {
            const response = await fetch (`${API_URL}/api/perfumes/admin/create`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${state.token}`
                },
                body: JSON.stringify(perfume)
            })

            const data = await response.json()

            if(!response.ok) {
                return data.message
            }

            dispatch({
                type:'ADD_PERFUME',
                payload:data
            })

            return null            
        } catch (error) {
            dispatch({
                type: 'ERROR_PERFUMES',
                payload: error.message
            })
            return error.message   
        }
    }

    async function updatePerfume(perfume, id) {
        try {
            const response = await fetch (`${API_URL}/api/perfumes/admin/actualizar/${id}`,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${state.token}`
                },
                body: JSON.stringify(perfume)
            })

            const data = await response.json()

            if(!response.ok) {
                return data.message
            }

            dispatch({
                type:'UPDATE_PERFUME',
                payload:data
            })

            return null            
        } catch (error) {
            dispatch({
                type: 'ERROR_PERFUMES',
                payload: error.message
            })
            return error.message   
        }
    }

    async function marcarDisponible(id) {
        try {
            const response = await fetch (`${API_URL}/api/perfumes/admin/disponible/${id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${state.token}`
                }
            })

            const data = await response.json()

            dispatch({
                type:'MARCAR_DISPONIBLE',
                payload:data
            })
        } catch (error) {
            dispatch({
                type: 'ERROR_PERFUMES',
                payload: error.message
            })  
        }
    }

    async function destacarPerfume(id) {
        try {
            const response = await fetch (`${API_URL}/api/perfumes/admin/destacar/${id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${state.token}`
                }
            })

            const data = await response.json()

            dispatch({
                type:'DESTACAR_PERFUME',
                payload:data
            })
        } catch (error) {
            dispatch({
                type: 'ERROR_PERFUMES',
                payload: error.message
            })  
        }
    }

    async function deletePerfume(id) {
        try {
            const response = await fetch(`${API_URL}/api/perfumes/admin/delete/${id}`, {method:'DELETE',
                headers:{'Authorization': `Bearer ${state.token}`}
            })

            dispatch({
                type: 'DELETE_PERFUME',
                payload: id
            })
        } catch (error) {
            dispatch({
                type: 'ERROR_PERFUMES',
                payload: error.message
            }) 
        }
    }

    async function getPedidos() {
        try{
            const response = await fetch (`${API_URL}/api/pedidos/admin`, {method: 'GET',         
                headers:{'Authorization': `Bearer ${state.token}`}
            })
            const data = await response.json()

            dispatch({
                type:'GET_PEDIDOS',
                payload: data
            })

        } catch (error) {
            dispatch({
                type: 'ERROR_PEDIDO',
                payload: error.message
            })
        }        
    }

    async function modificarEstado(id, accion) {
        try {
            const response = await fetch(`${API_URL}/api/pedidos/admin/${id}`, {method: 'PATCH',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${state.token}`
                },
                body: JSON.stringify(accion)
            })

            const data = await response.json()

            dispatch({
                type:'MODIFICAR_ESTADO',
                payload:data
            })            
        } catch (error) {
            dispatch({
                type: 'ERROR_PEDIDO',
                payload: error.message
            })
        }
    }

    async function deletePedido(id){
        try {
            const response = await fetch(`${API_URL}/api/pedidos/admin/${id}`, {method:'DELETE',
                headers:{'Authorization': `Bearer ${state.token}`}
            })

            dispatch({
                type: 'DELETE_PEDIDO',
                payload: id
            })
        } catch (error) {
            dispatch({
                type: 'ERROR_PEDIDO',
                payload: error.message
            })            
        }
    }

    async function createPedido(pedido) {
        console.log('pedido recibido:', pedido)
        try {
            const response = await fetch (`${API_URL}/api/pedidos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pedido)
            })

            const data = await response.json()
            console.log(data)

            if(!response.ok) {
                return data.message
            }

            dispatch({
                type:'ADD_PEDIDO',
                payload: data
            })
            
            return null
        } catch (error) {
            dispatch({
                type: 'ERROR_PEDIDOS',
                payload: error.message
            })   
        }
    }

    function agregarAlPedido(perfume, cantidad = 1) {
        const existe = state.perfumesPedido.find(p => p._id === perfume._id)

        if(existe && existe.cantidad + cantidad > perfume.stock) {
            return
        }

        if(!existe && cantidad > perfume.stock) {
            return
        }
        
        const item = { ...perfume, cantidad }
        dispatch({ type: 'AGREGAR_AL_PEDIDO', payload: item })
        
        if(existe) {
            const actualizados = state.perfumesPedido.map(p =>
                p._id === perfume._id ? { ...p, cantidad: p.cantidad + cantidad } : p
            )
            localStorage.setItem('perfumesPedido', JSON.stringify(actualizados))
        } else {
            localStorage.setItem('perfumesPedido', JSON.stringify([...state.perfumesPedido, item]))
        }
    }

    function vaciarPedido(){
        dispatch({ type: 'VACIAR_PEDIDO' })
        localStorage.removeItem('perfumesPedido')
    }

    function actualizarCantidad(id, cantidad) {
        const actualizados = state.perfumesPedido.map(p =>
            p._id === id ? { ...p, cantidad } : p
        )
        dispatch({ type: 'ACTUALIZAR_CANTIDAD', payload: { id, cantidad } })
        localStorage.setItem('perfumesPedido', JSON.stringify(actualizados))
    }

    function quitarDelPedido(id){
        dispatch({ type: 'QUITAR_DEL_PEDIDO', payload: id })
        const nuevos = state.perfumesPedido.filter(item => item._id !== id)
        localStorage.setItem('perfumesPedido', JSON.stringify(nuevos))
    }

    async function loginAdmin(credenciales) {
        try {
            const response = await fetch(`${API_URL}/api/usuarios/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credenciales)
            })

            const data = await response.json()

            if(!response.ok){
                return data.message
            }

            if(data.token){
                localStorage.setItem('token', data.token)

                dispatch({
                    type: 'LOGIN_ADMIN',
                    payload: data.token
                })
                return null
            }
        } catch (error) {
            dispatch({
                type: 'ERROR_ADMIN',
                payload: error.message
            })
            return error.message            
        }
    }

    function logoutAdmin() {
        localStorage.removeItem('token')
        dispatch({ type: 'LOGOUT_ADMIN' })
    }

    return (<GlobalContext.Provider value = {{
        perfumes: state.perfumes,
        perfumesPedido: state.perfumesPedido,
        pedidos: state.pedidos,
        loading: state.loading,
        error: state.error,
        adminAutenticado: state.adminAutenticado,
        token: state.token,
        loginAdmin,
        logoutAdmin,
        createPerfumes,
        updatePerfume,
        marcarDisponible,
        destacarPerfume,
        deletePerfume,
        getPedidos,
        modificarEstado,
        createPedido,
        deletePedido,
        agregarAlPedido,
        vaciarPedido,
        actualizarCantidad,
        quitarDelPedido
    }}>
        {children}
    </GlobalContext.Provider>)
}