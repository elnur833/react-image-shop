import React, { useContext } from 'react';
import classes from './AddToCartBtn.module.css';
import { CartContext } from '../../store/CartContext';

const AddToCartBtn = (props) => {

    const { addCart } = useContext(CartContext)

    const addToCartHandler = (image) => {
        addCart(image)
    }

    return (
        <button className={`${props.className} ${classes['add-cart-btn']}`} onClick={() => addToCartHandler(props.product)} > ADD TO CART</button >
    )
}

export default AddToCartBtn;