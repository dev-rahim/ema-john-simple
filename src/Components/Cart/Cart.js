import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props);
    const { cart } = props;
    // console.log(cart);

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        total = (total + product.price) * product.quantity;
        totalQuantity += product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <div className="cart-header">
                <h2>Order Summary</h2>
                <h4>Items ordered: {totalQuantity}</h4>
            </div>
            <div className='cart-calculation'>
                <p><span>Total:	</span><span>${total.toFixed(2)}</span></p>
                <p><span>Shipping & Handling:	</span><span>${shipping.toFixed(2)}</span></p>
                <p><span>Total before tax:	</span><span>${(shipping + total).toFixed(2)}</span></p>
                <p><span>Estimated Tax:	</span><span>${tax.toFixed(2)}</span></p>
                <h3><span>Order Total:	</span><span>${grandTotal.toFixed(2)}</span></h3>
            </div>
        </div>
    );
};

export default Cart;