import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [count, setCount] = useState(0)
    const handleAddToCart = (product) => {
        setCount = product + 1;
    }
    return (
        <div className='Products-container'>
            <div className="Products">
                {
                    products.map(pd => <Product key={pd.key} addToCart={handleAddToCart} product={pd} />)
                }
            </div>
            <div className="Order-Summery">
                <Cart />
            </div>
        </div>
    );
};

export default Products;