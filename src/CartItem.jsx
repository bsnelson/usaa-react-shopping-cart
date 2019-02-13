import React from 'react';

const CartItem = ({id, description, price, quantity}) =>
    <div className="collection-item" key={id}>
        <div className="row">
            <div className="col-md-8">{description}</div>
            <div className="col-md-2">{(price/100).toLocaleString("en-US", {style:"currency", currency:"USD"})}</div>
            <div className="col-md-2">{quantity}</div>
        </div>
    </div>

export default CartItem
