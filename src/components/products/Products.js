import React, { useContext, useEffect, useState } from 'react';
import classes from './Products.module.css';
import Card from '../ui/Card';
import ReactPaginate from "react-paginate";
import { ProductContext } from '../../store/ProductsContext';


const Products = (props) => {

    const { products } = useContext(ProductContext);
    const [updatedPro, setupdatedPro] = useState(products);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        setupdatedPro(products)
    }, [products])


    const productPerPage = 6;
    const pagesVisited = pageNumber * productPerPage;
    const displayProducts = updatedPro
        .slice(pagesVisited, pagesVisited + productPerPage)
        .map((image, index) => {
            return (
                <Card imageSrc={image.image.src} key={index} imageAlt={image.image.alt} category={image.category} title={image.name} price={image.price.toFixed(2)} bestseller={image.bestseller} featured={image.featured} product={image} />
            )
        })
    const pageCount = Math.ceil(updatedPro.length / productPerPage);


    const changePage = ({ selected }) => {
        setPageNumber(selected);

    };

    return (
        <div className={classes['products-section']}>
            <div className={classes['product-list']}>
                {displayProducts}
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />

            </div>
        </div>
    )
}

export default Products