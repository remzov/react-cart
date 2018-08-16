import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../components/cart-item/cart-item';
import { decreaseCount, increaseCount, clearCount } from '../../actions/actions';
import './cart.css';

class Cart extends Component {
	render() {	
		return (
			(this.props.cart.length > 0) ? 
			<div className="cart">
				<div className="cart__title">Корзина:</div>
				<ul>
					{this.props.cart.map((product) => {
						return <CartItem key={product.id} cartData={product} decreaseCount={this.props.decreaseCount} increaseCount={this.props.increaseCount} clearCount={this.props.clearCount}/>
					})}
				</ul>
        <div className="cart__result">Итого: {this.sumCart(this.props.cart)} рублей</div>
				<button className="cart__button" type="button">Перейти к оплате</button>
			</div>
			: false
		);
	}
	
	sumCart(cart) {
    return cart.reduce((sum, item) => {
      return sum + item.price * item.count
    }, 0)
  }
}


export default connect(
	state => ({
		cart: state.cart
	}),
	dispatch => ({
		decreaseCount: (id) => dispatch(decreaseCount(id)),
		increaseCount: (id) => dispatch(increaseCount(id)),
		clearCount: (id) => dispatch(clearCount(id))
	})
)(Cart);

 