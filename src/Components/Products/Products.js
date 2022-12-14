import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    // load data from api
    const size = 10;
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setFilteredProduct(data.products);

                const count = data.count;
                setPageCount(Math.ceil(count / size))
            })
    }, [page])

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
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button className={page === number ? 'selected' : ''} key={number} onClick={() => { setPage(number) }}>{number + 1}</button>
                                )
                        }
                    </div>
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