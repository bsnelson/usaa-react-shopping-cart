import React from 'react';

const CartFooter = ({text}) =>
    <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#top">&copy; {text}</a>
    </nav>

export default CartFooter
