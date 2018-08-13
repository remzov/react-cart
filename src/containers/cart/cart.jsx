import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../components/cart-item/cart-item';
import './cart.css';

class Cart extends Component {
	render() {	
		console.log(this.props.cart)
		return (
			<div className="cart">
				<ul>
					{this.props.cart.map((product) => {
						return <CartItem key={product.id} title={product.title} count={product.count}/>
					})}
				</ul>
			</div>
		);
	}
}

export default connect(
	state => ({
		cart: state.cart
	})
)(Cart);

 