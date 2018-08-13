import React, { Component } from 'react';
import './app.css';
import Store from  '../../containers/store/store';
import Cart from  '../../containers/cart/cart';

class App extends Component {
	render() {
		return( 
			<div>
				<Store/>
				<Cart/>
			</div>
		);
	}
}

export default App;