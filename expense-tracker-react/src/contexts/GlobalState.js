import React, { createContext, useReducer } from 'react'
import {AppReducer} from '../reducers/AppReducer'

const initialState = {
    transactions: [
            { id: 1, text: "鲜花", amount: -20 },
            { id: 2, text: "薪酬", amount: 300 },
            { id: 3, text: "书籍", amount: -10 },
            { id: 4, text: "相机", amount: 150 }
    ]
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <GlobalContext.Provider value = {{transactions: state.transactions,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}
