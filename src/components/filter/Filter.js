import React, { useState, useContext, useEffect } from 'react';
import classes from './Filter.module.css'
import Checkbox from '../ui/Checkbox';
import { ProductContext } from '../../store/ProductsContext';

const Filter = (props) => {
    const { categories, filterByCategory, prices, filterByPrice } = useContext(ProductContext)
    const [checked, setChecked] = useState([]);
    const [checkedPrice, setCheckedPrice] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    const handleCheckPrice = (event) => {
        var updatedList = { min: 0, max: 0 };

        if (event.target.checked) {
            const priceRange = event.target.value.split('-');
            updatedList = { min: priceRange[0], max: priceRange[1] };

        } else {
            updatedList.splice(checkedPrice.indexOf(event.target.value), 1);
        }
        setCheckedPrice(updatedList);

    };





    useEffect(() => {
        filterByCategory(checked);
    }, [checked]);

    useEffect(() => {
        filterByPrice(checkedPrice)
    }, [checkedPrice]);

    return (
        <div className={classes['filter-section']}>
            <div className={classes['filter-type']}>
                <h4>Category</h4>
                <ul>
                    {
                        categories.map((category, index) => {
                            return (
                                <li key={index}>
                                    <label className={classes['checkbox-label']}>
                                        <input type="checkbox" value={category.category} name='category' onChange={handleCheck} />
                                        <p>{category.category}</p>
                                    </label>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
            <div className={classes['filter-type']}>
                <h4>Price range</h4>
                <ul>
                    {
                        prices.map((price, index) => {
                            return (
                                <li key={index}>
                                    <label className={classes['checkbox-label']}>
                                        <input type="radio" value={price.value} name='price' onChange={handleCheckPrice} />
                                        <p>{price.price}</p>
                                    </label>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    )
}

export default Filter