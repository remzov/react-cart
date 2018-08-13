import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../components/cart-item/cart-item';
import './cart.css';

class Cart extends Component {
	render() {	
		return (
			<div className="cart">
				<ul>
					{this.props.cart.map((product) => {
						return <CartItem key={product.id} title={product.title} count={product.count}/>
					})}
				</ul>
        { (this.props.cart.length > 0) ? `Итого: ${this.sumCart(this.props.cart)} рублей` : false}
			</div>
		);
  }
  
  sumCart(cart) {

    return cart.reduce((sum, item) => {
      return sum + item.price*item.count
    }, 0)

  }
}

export default connect(
	state => ({
		cart: state.cart
	})
)(Cart);

 