import React, {useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div>
            <h4>你的余额</h4>
            <h1>{total}</h1>
        </div>
    )
}
