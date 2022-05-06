import React, { useContext } from 'react';
import classes from './PhotoOfDay.module.css';
import Container from '../layout/Container';
import AddToCartBtn from '../ui/AddToCartBtn';
import TwoSideTitle from '../ui/TwoSideTitle';
import { ProductContext } from '../../store/ProductsContext';
import { CartContext } from '../../store/CartContext';
const PhotoOfDay = (props) => {
    const { featuredProduct } = useContext(ProductContext);
    return (
        <Container>
            <div className={classes['photo-of-day-container']}>
                <TwoSideTitle >
                    <h2 className={classes['pday-title']}>{featuredProduct.name}</h2>
                    <div className={classes['pday-add-cart']}>
                        <AddToCartBtn product={featuredProduct} />
                    </div>
                </TwoSideTitle>
                <div className={classes['pday-main-image']}>
                    <img src={featuredProduct.image.src} alt={featuredProduct.image.alt} />
                    <span>Photo of the day</span>
                </div>
                <div className={classes['pday-main-description-container']}>
                    <div className={classes['pday-main-description-container__description']}>
                        <h3>About the {featuredProduct.name}</h3>
                        <span className={classes['pday-main-description-container__description_category']}>{featuredProduct.category}</span>
                        <div className={classes['pday-main-description-container__description_content']}>
                            {featuredProduct.details.description}
                        </div>
                    </div>
                    <div className={classes['pday-main-description-container__pbuy']}>
                        <h4>People also buy</h4>
                        <div className={classes['pday-main-description-container__images']}>
                            {
                                featuredProduct.details.recommendations.map((recom, index) => {
                                    return (
                                        <a href="#" key={index}>
                                            <img src={recom.src} alt={recom.alt} />
                                        </a>
                                    )
                                })
                            }

                        </div>
                        <h4>Details</h4>
                        <div className={classes['pday-main-description-container__details']}>
                            <div>Size: <span>{featuredProduct.details.dimmentions.width} x {featuredProduct.details.dimmentions.height} pixel</span></div>
                            <div>Size: <span>{featuredProduct.details.size / 1000} mb</span></div>
                        </div>
                    </div>
                </div>

            </div>
        </Container >
    )
}

export default PhotoOfDay