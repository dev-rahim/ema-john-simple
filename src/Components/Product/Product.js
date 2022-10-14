import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, seller, price, stock, img, addToCart } = props.product;
    console.log(addToCart);
    return (
        <div className='card'>
            <div className="">
                <img className='product-img' src={img} alt="" />
            </div>
            <div className="product-content">
                <h3>{name}</h3>
                <p>by: {seller}</p>
                <h4>${price}</h4>
                <p>only {stock} left in stock - order soon</p>
                <button className='btn-addToCart'> add to cart</button>
            </div>
        </div>
    );
};

export default Product;