import React, {createContext,useState, useContext} from 'react'
import cartItems from '../data'

const AppContext = createContext();

const AppProvider = (props) => {
    const [cart, setCart] = useState(cartItems)
    return (
        <AppContext.Provider value={{cart}}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}

