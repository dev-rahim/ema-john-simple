import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart] = useCart(products);
    return (
        <div className='Products-container'>
            <div className='Products'>
                {/* <h1>{products.length}</h1>
                <h3>{cart.length}</h3> */}
            </div>
            <div className='Order-Summery'>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default OrderReview;