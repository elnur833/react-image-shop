import React, { useContext } from 'react';
import classes from './CartButton.module.css';
import { CartContext } from '../../store/CartContext';

const CartButton = props => {
    const { cartItems, showCart } = useContext(CartContext)

    const showCartHandler = () => {
        showCart()
    }
    return (
        <div className={classes['header-cart-btn']}>
            <button className={classes['cart-button']} onClick={showCartHandler} ></button>
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
        </div>
    )
}

export default CartButton;