import React, {createContext,useState, useContext, useReducer} from 'react'
import cartItems from '../data'
import reducer from '../reducers/reducer'

const AppContext = createContext();

const initialState = {
    loading:false,
    cart: cartItems,
    total: 0,
    amount: 0,
}

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={{...state}}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}

