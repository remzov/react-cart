import React, { Component } from 'react';
import './product.css'; 

class Product extends Component {
	render() {	

        const {id, title, price} = this.props.productData;
        const addToCart = this.props.addToCart;

		return (
            <div className="product">
                <div className="product__title">
                    {title}
                </div>
                <div className="product__price">
                    {price} рублей
                </div>
                <button className="product__purchase" type="button" onClick={() => addToCart(id)}>Купить</button>
            </div>
		);
	}
}

export default Product;