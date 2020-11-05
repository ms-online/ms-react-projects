import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className="inc-exp-container">
        <div>
          <h4>收入</h4>
          <p className="money plus">+$0.00</p>
        </div>
        <div>
          <h4>支出</h4>
          <p className="money minus">-$0.00</p>
        </div>
      </div>
    )
}
