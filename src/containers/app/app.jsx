import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import Store from  '../../containers/store/store';
import Cart from  '../../containers/cart/cart';
import Form from  '../../components/form/form';

class App extends Component {
	render() {
		return( 
			<div className="app">
				<Store/>
				<Cart/>
                <Form cart={this.props.cart} showPayment={this.props.showPayment}/>
			</div>
		);
	}
}

export default connect(
	state => ({
		cart: state.cart,
		showPayment: state.showPayment
	})
)(App);

 