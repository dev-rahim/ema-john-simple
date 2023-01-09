import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItems/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products);
    // console.log(cart);

    const handleRemove = (key) => {
        const remainingItem = cart.filter(item => item.key !== key)
        setCart(remainingItem)
        removeFromDb(key)
    }
    const navigate = useNavigate();
    const handleProceedToShipping = () => {
        navigate('/shipping')
        // navigate('/place-order')
        // setCart([])
        // deleteShoppingCart(cart)
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
                    <button onClick={handleProceedToShipping} className='btn-regular'>Proceed to Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;