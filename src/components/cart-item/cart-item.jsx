import React, { Component } from 'react';
import './cart-item.css';

class CartItem extends Component {
	render() {	
		const {id, title, count, price} = this.props.cartData;
		const decreaseCount = this.props.decreaseCount;
		const increaseCount = this.props.increaseCount;
		const clearCount = this.props.clearCount;

		return (
			<li className="cart-item">
				<div>
					{title}. 
					<span className="cart-item__control">
						<button type="button" onClick={() => decreaseCount(id)}>-</button>
						{/* <input className="cart-item__value" type="text" value={count} min="0"/> */}
						<span className="cart-item__value">{count}</span>
						<button type="button" onClick={() => increaseCount(id)}>+</button>
					</span>
					<span className="cart-item__cost">Стоимость: { count * price} рублей.</span>
				</div>
				<button className="cart-item__clear" type="button" onClick={() => clearCount(id)}>
					<svg xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 357 357">
						<polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
							214.2,178.5"/>
					</svg>
				</button>
			</li>
		);
	}
}

export default CartItem;