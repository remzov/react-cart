import React, { Component } from 'react';
import './form.css'; 

class Form extends Component {
   
    render() {	
        return (
            (this.props.showPayment && this.props.cart.length > 0) ? 
            <form className="form">
                <div className="form__title">Оплата:</div>
                <div className="form__row">
                    <input className="form__input" type="text" name="number" placeholder="Номер карты" pattern="[0-9]{6}" title="Введите шесть цифр от 0 до 9" required onChange={(event) => (this.props.form.checked) ? this.checkInput(event) : false}/>
                    {( this.props.form.checked && this.props.cardNumberError) ? 
                    <div className="form__error">Введите шесть цифр от 0 до 9</div>
                    : false }
                </div>
                <div className="form__row">
                    <input className="form__input" type="text" name="name" placeholder="Имя владельца" pattern="[A-Z]{3,}" title="Введите буквы латинского алфавита в верхнем регистре" required onChange={(event) => ( this.props.form.checked) ? this.checkInput(event) : false}/>
                    {(this.props.form.checked && this.props.cardNameError ) ? 
                    <div className="form__error">Введите не менее трёх букв латинского алфавита в верхнем регистре</div>
                    : false }
                </div>
                <div className="form__row">
                    <button className="form__submit js-submit" type="submit" onClick={(event) => this.validation(event, document.querySelector('.form'))}>Оплатить</button>
                </div>
            </form>
            : false
        )
    }

    validation = (event, form) => {
        const numberInput = form.querySelector('input[name=number]');
        const nameInput = form.querySelector('input[name=name]');

        event.preventDefault();
        this.props.checkForm();
        form.classList.add('form_checked');
        (numberInput.checkValidity()) ? this.props.hideNumberError() : this.props.showNumberError();
        (nameInput.checkValidity()) ? this.props.hideNameError() : this.props.showNameError();
        if (form.checkValidity()) this.props.pay();
    }

    checkInput = (event) => {
        switch (event.target.name) {
            case 'number': {
                (event.target.checkValidity()) ? this.props.hideNumberError() : this.props.showNumberError();
                break;
            }
            case 'name': {
                (event.target.checkValidity()) ? this.props.hideNameError() : this.props.showNameError()
                break;
            }
            default: return;
        }
    }
}

export default Form;