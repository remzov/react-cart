import React, { Component } from 'react';

class CartItem extends Component {
	render() {	
        const title = this.props.title;
        const count = this.props.count;
		return (
            <li className="cart-item">
                {title}. {count} шт.
            </li>
		);
	}
}

export default CartItem;