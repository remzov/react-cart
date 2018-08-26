import React, { Component } from 'react';
import './product.css'; 

class Product extends Component {
    render() {	
        const {id, title, price, count} = this.props.productData;
        const purchase = this.props.purchase;

        return (
            <div className="product">
                <div className="product__title">
                    {title}
                </div>
                <div className="product__price">
                    {price} рублей
                </div>
                <div className="product__count">
                    Осталось {count} шт.  
                </div>
                <button className="product__purchase" type="button" onClick={() => purchase(id)}
                disabled={(count === 0) ? true : false }>Купить</button>
            </div>
        );
    }
}

export default Product;