import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    // load data from api 
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProduct(data);
            })
    }, [])

    // get added cart items
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            // console.log(savedCart);
            const savedProduct = []
            for (const key in savedCart) {
                // console.log(key);
                const addedProduct = products.find(product => product.key === key)
                // console.log(addedProduct, key);
                if (addedProduct) {
                    // get keys value as quantity 
                    const quantity = savedCart[key];
                    // set object quantity
                    addedProduct.quantity = quantity;
                    savedProduct.push(addedProduct);

                }
            }
            setCart(savedProduct);
        }
    }, [products])

    const [cart, setCart] = useState([])
    const handleAddToCart = (product) => {

        const exists = cart.find(pd => pd.key === product.key);
        let newCart = []
        if (exists) {
            const remaining = cart.filter(pd => pd.key !== product.key)
            exists.quantity = exists.quantity + 1;
            newCart = [...remaining, product];
        } else {
            newCart = [...cart, product];
        }
        setCart(newCart)
        // setProduct(product + 1);
        // console.log(count);
        // console.log(product.name);

        /* save to localStorage */
        addToDb(product.key)

    }

    const [filteredProduct, setFilteredProduct] = useState([]);

    const handleSearch = (event) => {
        const searchFieldValue = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchFieldValue.toLowerCase()));

        setFilteredProduct(matchedProduct);
        // console.log(products);
        // console.log(filteredProduct);
    }

    return (
        <>
            <div className="search-input-container">
                <input onChange={handleSearch} className='input-filed' type="text" placeholder='search here' />
            </div>
            <div className='Products-container'>
                <div className="Products">
                    {
                        filteredProduct.map(pd => <Product key={pd.key} addToCartBtn={handleAddToCart} product={pd} />)
                    }
                </div>
                <div className="Order-Summery">
                    <Cart cart={cart}>
                        <NavLink className='btn-regular' to="/review"> Order Review</NavLink>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Products;