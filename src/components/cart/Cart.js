import React, { Fragment, useContext, useState } from 'react';
import classes from './Cart.module.css';
import { CartContext } from '../../store/CartContext';

const Cart = () => {
    const { cartItems, cartVisible, hideCart, clearCart } = useContext(CartContext);

    const cartVisibleHandler = () => {
        hideCart();
    }

    const clearCartHandler = () => {
        clearCart();
    }
    return (
        <Fragment>
            {cartVisible && <div className={classes.cart}>
                <div className={classes['cart-box']}>
                    <button className={classes.close} onClick={cartVisibleHandler} ></button>
                    <div className={classes['cart-list']}>
                        {cartItems.length > 0 ? <ul>
                            {cartItems.map(item => {
                                return (
                                    <li>
                                        <div className={classes['cart-item']}>
                                            <div className={classes['cart-description']}>
                                                <h4>{item.product.name}</h4>
                                                <span>${item.product.price.toFixed(2)}</span>
                                            </div>
                                            <div className={classes['cart-image']}>
                                                <img src={item.product.image.src} />
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul> : <p className={classes.empty}>No item in the cart</p>}
                    </div>
                    <button className={`${classes.clear} ${cartItems.length < 1 ? classes.disable : ''}`} onClick={clearCartHandler} >Clear</button>
                </div>
            </div>}
        </Fragment>
    )
}

export default Cart