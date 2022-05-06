import React, { createContext, useEffect, useState } from 'react';
export const ProductContext = createContext();
const images = {
    "products": [
        {
            "id": 1,
            "name": "Red Bench",
            "category": "people",
            "price": 3.89,
            "currency": "USD",
            "image": {
                "src": "https://images.pexels.com/photos/1638051/pexels-photo-1638051.jpeg?auto=compress&cs=tinysrgb&w=1600",
                "alt": "Red Bench"
            },
            "bestseller": false,
            "featured": false,
            "details": null
        },
        {
            "id": 2,
            "name": "Egg Balloon",
            "category": "food",
            "price": 93.89,
            "currency": "USD",
            "image": {
                "src": "https://images.pexels.com/photos/1030868/pexels-photo-1030868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "alt": "Egg Balloon"
            },
            "bestseller": false,
            "featured": false,
            "details": null
        },
        {
            "id": 3,
            "name": "Man",
            "category": "people",
            "price": 100.99,
            "currency": "USD",
            "image": {
                "src": "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "alt": "Man"
            },
            "bestseller": true,
            "featured": false,
            "details": null
        },
        {
            "id": 4,
            "name": "Architecture",
            "category": "landmarks",
            "price": 101,
            "currency": "USD",
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "image": {
                "src": "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                "alt": "Architecture"
            },
            "bestseller": false,
            "details": null
        },
        {
            "id": 5,
            "name": "Samurai King Restling",
            "category": "people",
            "price": 101,
            "currency": "USD",
            "image": {
                "src": "https://images.pexels.com/photos/10819545/pexels-photo-10819545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "alt": "Samurai King Restling"
            },
            "bestseller": false,
            "featured": true,
            "details": {
                "dimmentions": {
                    "width": 1020,
                    "height": 1020
                },
                "size": 15000,
                "description": "So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely",
                "recommendations": [
                    {
                        "src": "https://images.pexels.com/photos/5971326/pexels-photo-5971326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        "alt": "Samurai King Restling"
                    },
                    {
                        "src": "https://images.pexels.com/photos/7268040/pexels-photo-7268040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        "alt": "Samurai King Restling"
                    },
                    {
                        "src": "https://images.pexels.com/photos/10819551/pexels-photo-10819551.jpeg?auto=compress&cs=tinysrgb&w=1600",
                        "alt": "Samurai King Restling"
                    }
                ]
            }
        },
        {
            "id": 6,
            "name": "Red and Black Temple Surrounded by Trees Photo",
            "category": "landmarks",
            "price": 210,
            "currency": "USD",
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "image": {
                "src": "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "alt": "Red and Black Temple Surrounded by Trees Photo"
            },
            "bestseller": false,
            "details": null
        },
        {
            "id": 7,
            "name": "La Spezia Naval Base in Italy",
            "category": "landmarks",
            "price": 49.99,
            "currency": "USD",
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "image": {
                "src": "https://images.pexels.com/photos/11956000/pexels-photo-11956000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "alt": "La Spezia Naval Base in Italy"
            },
            "bestseller": false,
            "details": null
        },
        {
            "id": 8,
            "name": "White and Pink Flower Bouquet on Blue Armchair",
            "category": "premium",
            "price": 112.99,
            "currency": "USD",
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "image": {
                "src": "https://images.pexels.com/photos/4618537/pexels-photo-4618537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "alt": "White and Pink Flower Bouquet on Blue Armchair"
            },
            "bestseller": false,
            "details": null
        },
        {
            "id": 9,
            "name": "Woman in Gray Coat Holding a Blue Shovel Standing Beside a Dog",
            "category": "pets",
            "price": 112.99,
            "currency": "USD",
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "image": {
                "src": "https://images.pexels.com/photos/6490022/pexels-photo-6490022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "alt": "Woman in Gray Coat Holding a Blue Shovel Standing Beside a Dog"
            },
            "bestseller": false,
            "details": null
        },
        {
            "id": 10,
            "name": "Photography of Roadway During Dusk",
            "category": "cities",
            "price": 140.99,
            "currency": "USD",
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "image": {
                "src": "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "alt": "Photography of Roadway During Dusk"
            },
            "bestseller": false,
            "details": null
        },
        {
            "id": 11,
            "name": "First Perspective Photography of Hanging Bridge",
            "category": "nature",
            "price": 67.99,
            "currency": "USD",
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "image": {
                "src": "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "alt": "First Perspective Photography of Hanging Bridge"
            },
            "bestseller": false,
            "details": null
        },
        {
            "id": 12,
            "name": "Gray and Brown Boat Traveling on Man-made River",
            "category": "cities",
            "price": 88.99,
            "currency": "USD",
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "image": {
                "src": "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "alt": "Gray and Brown Boat Traveling on Man-made River"
            },
            "bestseller": false,
            "details": null
        },
        {
            "id": 13,
            "name": "Pets Inside the House",
            "category": "pets",
            "price": 10.99,
            "currency": "USD",
            "dimmentions": {
                "width": 1020,
                "height": 1020
            },
            "image": {
                "src": "https://images.pexels.com/photos/7527370/pexels-photo-7527370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "alt": "Pets Inside the House"
            },
            "bestseller": false,
            "details": null
        },
    ]
}

const ProductsContextProvider = (props) => {
    const [products, setProducts] = useState(images['products']);
    const [sortingData, setSortingData] = useState([]);
    const [byCategory, setByCategory] = useState([]);
    const [byPrice, setByPrice] = useState([]);
    const [maxPrice, setMaxPrice] = useState(products.reduce((acc, shot) => acc = acc > shot.price ? acc : shot.price, 0) + 1)
    const [featuredProduct, setFeaturedProduct] = useState(products.find(elem => elem.featured === true))
    const [standartProducts, setStandartProducts] = useState(products.filter(product => product.id !== featuredProduct.id));

    const categories = [
        { category: "people" },
        { category: "landmarks" },
        { category: "pets" },
        { category: "nature" },
        { category: "premium" },
        { category: "cities" },
        { category: "food" }
    ];

    const prices = [
        {
            price: 'All',
            value: `0 - ${maxPrice}`
        },
        {
            price: 'Lower than $20',
            value: '0-20'
        },
        {
            price: '$20 - $100',
            value: '20-100'
        },
        {
            price: '$100 - $200',
            value: '100-200'
        },
        {
            price: 'More than $200',
            value: `201 - ${maxPrice}`
        },
    ]





    const filterByCategory = (checked) => {

        if (checked.length === 0) {
            setProducts(standartProducts);
        } else {

            if (byPrice.length > 0) {
                var filteredByCategory = byPrice.filter(categories =>
                    checked.some(category => [categories.category].flat().includes(category))
                );
            } else {
                var filteredByCategory = standartProducts.filter(categories =>
                    checked.some(category => [categories.category].flat().includes(category))
                );
            }

            setByCategory(filteredByCategory);
            setProducts(filteredByCategory);

        }
    }

    console.log(byCategory)

    const filterByPrice = (checked) => {

        if (checked.length === 0) {
            setProducts(standartProducts);
        } else {
            if (byCategory.length > 0) {
                setProducts(byCategory.filter(product => product.price < checked.max && checked.min < product.price))
            } else {
                setProducts(standartProducts.filter(product => product.price < checked.max && checked.min < product.price));
                setByPrice(standartProducts.filter(product => product.price < checked.max && checked.min < product.price));
            }



        }
    }

    const sortByAlpha = (products) => {
        setSortingData()
    }

    const reverseSortData = (products) => {
        setSortingData(products)
    }


    const context = {
        products,
        standartProducts,
        featuredProduct,
        categories,
        filterByCategory,
        prices,
        sortByAlpha,
        reverseSortData,
        filterByPrice
    }



    return (
        <ProductContext.Provider value={{ ...context }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductsContextProvider