import React, { createContext, useEffect, useState } from 'react';
import alertify from 'alertifyjs'
export const CartContext = createContext();


const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const [cartVisible, setCartVisible] = useState(false)

    const hideCart = () => {
        setCartVisible(false);
    }

    const showCart = () => {
        setCartVisible(!cartVisible);
    }

    // useEffect(() => {
    //     if (images['products'].length > 0) {

    //     }
    // }, []);
    const addCart = (image) => {
        let newCartItems = cartItems;
        const addedItem = cartItems.find(elem => elem.product.id === image.id);
        if (addedItem) {
            alertify.error(addedItem.product.name + ' ' + 'already added cart', 2);
        } else {
            newCartItems.push(({ product: image }))
            alertify.success(image.name + ' ' + 'added to cart', 2);
            setCartVisible(true)
        }

        setCartItems([...newCartItems])
    }

    const clearCart = () => {
        setCartItems([]);
        setCartVisible(false)
    }

    const context = {
        cartItems,
        addCart,
        cartVisible,
        hideCart,
        showCart,
        clearCart
    }

    return (
        <CartContext.Provider value={{ ...context }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider