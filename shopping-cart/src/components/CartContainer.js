import React from 'react'
import { useGlobalContext } from '../contexts/context'
import CartItem from './CartItem'
const CartContainer = () => {
    const { cart, total ,clearCart} = useGlobalContext();
    console.log(cart);
    if (cart.length === 0) {
        return (
            <section className="cart">
                <header>
                    <h2>购物车</h2>
                    <h4 className="empty-cart">
                        没有选购的商品
                    </h4>
                </header>  
            </section>
        )
    }
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
                <button className="btn clear-btn" onClick={clearCart}>
                    清空购物车
                </button>
            </footer>
        </section>
    )
}

export default CartContainer
