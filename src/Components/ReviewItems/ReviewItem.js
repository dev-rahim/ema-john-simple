import React from 'react';

const ReviewItem = (props) => {
    const { name, price, img, key, seller, quantity } = props.product;

    return (
        <div className="product-content">
            <div>
                <h3>{name}</h3>
                <h4>${price}</h4>
                <p> sold by: {seller}</p>
                <h5>Quantity:{quantity}</h5>
                <button
                    onClick={() => props.handleRemove(key)}
                    className='btn-regular'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;