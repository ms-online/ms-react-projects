import React, {createContext, useContext, useReducer, useEffect} from 'react'
import cartItems from '../data'
import reducer from '../reducers/reducer'
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = createContext();

const initialState = {
    loading:false,
    cart: [],
    total: 0,
    amount: 0,
}


const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // 实现购物车功能函数
    const clearCart = () => {
    dispatch({ type:'CLEAR_CART'})
    }
    
    const remove = (id) => {
        dispatch({ type:'REMOVE', payload:id})
    }
    const increase = (id) => {
        dispatch({ type:'INCREASE', payload:id})
    }
    const decrease = (id) => {
        dispatch({ type:'DECREASE', payload:id})
    }
    const fetchData = async () => {
        dispatch({ type: 'LOADING' })
        const response = await fetch(url)
        const cart = await response.json()
        dispatch({ type: 'DISPLAY_ITEMS', payload:cart})
    }
    useEffect(() => {
        dispatch({ type:'GET_TOTALS'})
    }, [state.cart])
    
    useEffect(() => {
        fetchData()
    },[])
    return (
        <AppContext.Provider value={{...state,clearCart,remove,increase,decrease  }}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}

