import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
          <h3>添加新交易</h3>
            <form>
                <div className="form-control">
                <label htmlFor="text">交易名称</label>
                <input type="text" id="text" placeholder="输入名称..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount">金额 <br />（支出-负数，收入-正数）</label>
                <input type="number" id="amount" placeholder="输入金额..." />
                </div>
                <button className="btn">添加新交易</button>
            </form>
        </div>
    )
}
