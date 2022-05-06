import React from 'react';
import classes from './ProductDashboard.module.css';
import Container from './Container';
import Filter from '../filter/Filter';
import Products from '../products/Products';
import TwoSideTitle from '../ui/TwoSideTitle';
import Sorting from '../ui/Sorting';

const ProductDashboard = props => {
    return (
        <Container>
            <div className={classes['product-dashboard']}>
                <TwoSideTitle>
                    <div className={classes.breadcrumb}>
                        <ul>
                            <li>
                                <a href="#" className={classes.active}>Photograpy</a>
                            </li>
                            <li>
                                <a href="#" >Premium Photos</a>
                            </li>
                        </ul>
                    </div>
                    <Sorting />
                </TwoSideTitle>
                <Filter />
                <Products />
            </div>
        </Container>
    )
}

export default ProductDashboard