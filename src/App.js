import React, { Component } from 'react';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import AddItem from './AddItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        products: [
            { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
            { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
            { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
            { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
            { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
            { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
            { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
            { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
            { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
        ],
        cartItemsList: []
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    console.log("addItem was called with ", item);
    this.setState({ cartItemsList: [...this.state.cartItemsList, item] })
  }

  getSum(total, item) {
    console.log("Item to be summed: ", item);
    return total + item.product.priceInCents * item.quantity;
  }

  getTotal() {
    let total = this.state.cartItemsList.reduce(this.getSum, 0);
    console.log("The total is ", total);
    return `Total: ${(total/100).toLocaleString("en-US", {style:"currency", currency:"USD"})}`;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <CartHeader/>
        <CartItems items={this.state.cartItemsList}/>
        <div>{this.getTotal()}</div>
        <AddItem addItem={this.addItem} products={this.state.products}/>
        <CartFooter text="2019"/>
      </div>
    );
  }
}

export default App;
