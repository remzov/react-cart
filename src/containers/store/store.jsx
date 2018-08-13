import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../components/product/product';
import { addToCart } from '../../actions/actions';

import './store.css';

class Store extends Component {
	render() {	
		return (
			<div className="store">
				{this.props.products.map(product => {
					return <Product key={product.id} productData={product} addToCart={this.props.addToCart}/>
				})}
			</div>
		);
	}
}

export default connect(
	state => ({
		products: state.products
	}),
	dispatch => ({
		addToCart: (id) => dispatch(addToCart(id)) 
	}) 
)(Store);

 