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

    const [cart, setCart] = useState([])
    const handleAddToCart = (product) => {
        setCart([...cart, product])
        // setProduct(product + 1);
        // console.log(count);
        // console.log(product.name);
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