import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../components/product/product';
import { purchase } from '../../actions/products';
import './store.css';

class Store extends Component {
	render() {	
		return (
			<div className="store">
				{this.props.products.map(product => {
					return <Product key={product.id} productData={product} purchase={this.props.purchase}/>
				})}
			</div>
		);
	}
}

export default connect(
	state => ({
		products: state.products.items
	}),
	dispatch => ({
		purchase: (id) => dispatch(purchase(id)) 
	}) 
)(Store);

 