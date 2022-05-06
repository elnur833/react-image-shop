import React from 'react';
import Container from '../layout/Container';
import classes from './Header.module.css';
import CartButton from '../ui/CartButton';
import logo from '../../assets/images/bejama_logo.svg';
import Cart from '../cart/Cart';

const Header = () => {
    return (
        <Container>
            <div className={classes['header-container']}>
                <a href='#' >
                    <img src={logo} alt="Bejama logo" />
                </a>
                <CartButton />
                <Cart />
            </div>
        </Container>
    )
}

export default Header;