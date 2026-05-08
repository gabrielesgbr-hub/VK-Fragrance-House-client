const AppReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_ADMIN':
            return {
                ...state,
                adminAutenticado: true,
                token: action.payload
            }
        case 'LOGOUT_ADMIN':
            return {
                ...state,
                adminAutenticado: false,
                token: null
            }
        case 'ERROR_ADMIN':
            return{
                ...state,
                loading: false,
                error: action.payload   
            }
        case 'GET_PERFUMES':
            return {
                ...state,
                loading: false,
                perfumes: action.payload
            }
        case 'DELETE_PERFUME':
            return {
                ...state,
                loading: false,
                perfumes: state.perfumes.filter(perfume => perfume._id !== action.payload)
            }
        case 'ADD_PERFUME':
            return{
                ...state,
                loading: false,
                perfumes: [...state.perfumes, action.payload]
            }
        case 'UPDATE_PERFUME':
            return{
                ...state,
                loading: false,
                perfumes : state.perfumes.map(perfume => perfume._id === action.payload._id ? action.payload : perfume)
            }
        case 'MARCAR_DISPONIBLE':
            return {
                ...state,
                loading: false,
                perfumes : state.perfumes.map(perfume => perfume._id === action.payload._id ? action.payload : perfume)
            }
        case 'DESTACAR_PERFUME':
            return{
                ...state,
                loading: false,
                perfumes: state.perfumes.map(perfume => perfume._id === action.payload._id ? action.payload : perfume)
            }
        case 'ERROR_PERFUME':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'GET_PEDIDOS':
            return {
                ...state,
                loading: false,
                pedidos: action.payload
            }
        case 'DELETE_PEDIDO':
            return {
                ...state,
                loading: false,
                pedidos: state.pedidos.filter(pedido => pedido._id !== action.payload) 
            }
        case 'MODIFICAR_ESTADO':
            return{
                ...state,
                loading: false,
                pedidos: state.pedidos.map(pedido => pedido._id === action.payload._id ? action.payload : pedido)
            }
        case 'ADD_PEDIDO':
            return{
                ...state,
                loading: false,
                pedidos: [action.payload, ...state.pedidos]
            }
        case 'AGREGAR_AL_PEDIDO': {
            const existe = state.perfumesPedido.find(item => item._id === action.payload._id)
            if(existe) {
                return {
                    ...state,
                    perfumesPedido: state.perfumesPedido.map(item =>
                        item._id === action.payload._id
                            ? { ...item, cantidad: item.cantidad + action.payload.cantidad }
                            : item
                    )
                }
            }
            return {
                ...state,
                perfumesPedido: [...state.perfumesPedido, action.payload]
            }
        }
        case 'QUITAR_DEL_PEDIDO':
            return {
                ...state,
                perfumesPedido: state.perfumesPedido.filter(item => item._id !== action.payload)
            }
        case 'VACIAR_PEDIDO':
            return {
                ...state,
                perfumesPedido: []
            }
        case 'ACTUALIZAR_CANTIDAD': {
            return {
                ...state,
                perfumesPedido: state.perfumesPedido.map(p =>
                    p._id === action.payload.id ? { ...p, cantidad: action.payload.cantidad } : p
                )
            }
        }
        case 'ERROR_PEDIDO':
            return{
                ...state,
                loading: false,
                error: action.payload
            }
    }
}

export default AppReducer