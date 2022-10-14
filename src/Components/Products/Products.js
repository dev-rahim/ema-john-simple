import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    return (
        <div className='Products-container'>
            <div className="Products">
                <Product />
            </div>
            <div className="Order-Summery">
                <Cart />
            </div>
        </div>
    );
};

export default Products;