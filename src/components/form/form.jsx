import React, { Component } from 'react';
import './form.css'; 

class Form extends Component {
    render() {	
        return (
            (this.props.showPayment && this.props.cart.length > 0) ? 
            <form className="form">
                <div className="form__title">Оплата:</div>
                <div className="form__row">
                    <input className="form__input" placeholder="Номер карты" pattern="[0-9]{6}"/>
                </div>
                <div className="form__row">
                    <input className="form__input" placeholder="Имя владельца" pattern="[A-Za-z]{3,}"/>
                </div>
                <div className="form__row">
                    <button className="form__submit" type="submit">Оплатить</button>
                </div>
            </form>
            : false
        )
    }
}

export default Form;