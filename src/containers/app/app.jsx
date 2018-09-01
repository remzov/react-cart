import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import Store from  '../../containers/store/store';
import Cart from  '../../containers/cart/cart';
import Form from  '../../components/form/form';
 import { checkForm, showNameError, showNumberError, hideNumberError, hideNameError, pay } from '../../actions/actions';

class App extends Component {
	render() {
		return( 
			<div className="app">
				<Store/>
				<Cart/>
                <Form cart={this.props.cart} showPayment={this.props.showPayment} submit={this.props.submit} form={this.props.form} checkForm={this.props.checkForm} showNumberError={this.props.showNumberError} showNameError={this.props.showNameError} hideNumberError={this.props.hideNumberError} hideNameError={this.props.hideNameError} formChecked={this.props.formChecked} cardNumberError={this.props.cardNumberError} cardNameError={this.props.cardNameError} pay={this.props.pay}/>
			</div>
		);
	}
}

export default connect(
	state => ({
		cart: state.cart,
		showPayment: state.showPayment,
		form: state.form,
		formChecked:  state.form.checked,
		cardNumberError: state.form.errors.cardNumber,
		cardNameError: state.form.errors.cardName
	}),
	dispatch => ({
		checkForm: () => dispatch(checkForm()), 
		showNumberError: () => dispatch(showNumberError()), 
		showNameError: () => dispatch(showNameError()),
		hideNumberError: () => dispatch(hideNumberError()), 
		hideNameError: () => dispatch(hideNameError()),
		pay: () => dispatch(pay()) 
	})
)(App);