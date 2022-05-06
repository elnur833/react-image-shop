import React, { useContext, useState, useEffect } from 'react';
import classes from './Sorting.module.css';
import { ProductContext } from '../../store/ProductsContext';

const Sorting = () => {

    const { products, sortByAlpha, reverseSortData } = useContext(ProductContext);
    const [sortedProducts, setSortedProducts] = useState(products);
    const [sortType, setSortType] = useState('price');
    const [sortToDown, setSortToDown] = useState(true);
    useEffect(() => {
        setSortedProducts(products)
    })


    const changeSortType = (event) => {
        setSortType(event.target.value)
    }


    const compareStrings = (a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();

        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    const sortingHandler = () => {
        if (sortType === "alphabetically") {
            setSortedProducts(sortedProducts.sort(function (a, b) {
                return compareStrings(a.name, b.name);

            }))

        }

        if (sortType === 'price') {
            setSortToDown(false)
            setSortedProducts(sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)))
        }

        setSortToDown(!sortToDown);
        if (sortToDown) {
            sortByAlpha(sortedProducts);
        } else {
            reverseSortData(sortedProducts.reverse());

        }

    }





    return (
        <div className={classes.sorting}>
            <button className={classes.sortBtn} onClick={() => sortingHandler()}></button>
            <p className={classes.sortWord}>Sort By</p>
            <select className={classes.sortSelect} onChange={changeSortType} >
                <option value="price">Price</option>
                <option value="alphabetically">Alphabetically</option>
            </select>
        </div>
    )
}

export default Sorting;