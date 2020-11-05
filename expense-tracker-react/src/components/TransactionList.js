import React from 'react'

export const TransactionList = () => {
    return (
        <div>
             <h3>历史记录</h3>
                <ul  className="list">
                    <li className="minus">
                    买书 <span>-$200</span><button className="delete-btn">x</button>
                    </li> 
                </ul>
        </div>
    )
}
