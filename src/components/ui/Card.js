import React, { useContext } from 'react';
import classes from './Card.module.css';
import AddToCartBtn from '../ui/AddToCartBtn';
const Card = props => {


    return (
        <div className={classes['product-card-box']}>
            <div className={classes['product-card']}>
                <div className={classes['product-card__image']}>
                    {props.bestseller && <span className={classes['bestseller']}>Bestseller</span>}
                    <img src={props.imageSrc} alt={props.imageAlt} />
                    <AddToCartBtn product={props.product} className={classes.listAddtoButton} />
                </div>
                <div className={classes['product-card__description']}>
                    <div className={classes['card-category']}>{props.category}</div>
                    <h4 className={classes['card-title']}>{props.title}</h4>
                    <span className={classes['card-price']}>${props.price}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;