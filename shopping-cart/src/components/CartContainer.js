import React from 'react'
import { useGlobalContext } from '../contexts/context'
import CartItem from './CartItem'
const CartContainer = () => {
    const { cart, total } = useGlobalContext();
    console.log(cart);
    return (
        <section className="cart">
            {/* cart header */}
            <header>
                <h2>我的购物车</h2>
            </header>
            {/* cart items */}
            <div>
                {cart.map((item, index) => {
                    return <CartItem key={index} {...item}/>
                })}
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>总价 <span>${ total}</span></h4>
                </div>
                <button className="btn clear-btn" onClick={() => console.log('清空购物车')}>
                    清空购物车
                </button>
            </footer>
        </section>
    )
}

export default CartContainer
