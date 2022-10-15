import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props);
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    return (
        <div>
            <div className="cart-header">
                <h2>Order Summary</h2>
                <h4>Items ordered: {props.cart.length}</h4>
            </div>
            <div className='cart-calculation'>
                <p><span>Items:	</span><span>{total}</span></p>
                <p><span>Shipping & Handling:	</span><span>{0}</span></p>
                <p><span>Total before tax:	</span><span>{0}</span></p>
                <p><span>Estimated Tax:	</span><span>{0}</span></p>
                <h3><span>Order Total:	</span><span>${0}</span></h3>

            </div>
        </div>
    );
};

export default Cart;