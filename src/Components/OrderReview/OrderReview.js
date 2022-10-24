import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItems/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products);

    const handleRemove = (key) => {
        const remainingItem = cart.filter(item => item.key !== key)
        setCart(remainingItem)
        removeFromDb(key)
    }
    return (
        <div className='Products-container'>
            <div className='Products'>
                {
                    cart.map(product => <ReviewItem key={product.key} product={product} handleRemove={handleRemove} />)
                }
            </div>
            <div className='Order-Summery'>
                <Cart cart={cart} >
                    <button className='btn-regular'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;