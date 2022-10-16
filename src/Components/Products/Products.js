import React, { useEffect, useState } from 'react';
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
            .then(data => setProducts(data))
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
        setCart([...cart, product])
        // setProduct(product + 1);
        // console.log(count);
        // console.log(product.name);

        /* save to localStorage */
        addToDb(product.key)

    }
    return (
        <div className='Products-container'>
            <div className="Products">
                {
                    products.map(pd => <Product key={pd.key} addToCartBtn={handleAddToCart} product={pd} />)
                }
            </div>
            <div className="Order-Summery">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Products;