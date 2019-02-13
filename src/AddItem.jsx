import React from 'react';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 0, item: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
        // this.props.addItem = this.props.addItem.bind(this);
    }

    handleQuantityChange(event) {
        this.setState({quantity: event.target.value});
    }

    handleItemChange(event) {
        this.setState({item: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Item: " + this.state.item + ", quantity: " + this.state.quantity);
        const picked = this.props.products.find( element => {return element.name === this.state.item });
        console.log("Product: ", this.state.item, ", picked: ",picked);
        const chosen = {product: picked, quantity: this.state.quantity};
        console.log("chosen: ", chosen);
        this.props.addItem(chosen);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Quantity:
                    <input type="text" value={this.state.quantity} onChange={this.handleQuantityChange}/>
                </label>
                <div/>
                <label>
                    Products:
                    <select onChange={this.handleItemChange}>
                        <option key="10000" value="" disabled selected>Select an option...</option>
                        {this.props.products.map( (product) =>
                           <option key={product.id} value={product.name}>{product.name}</option>
                        )}
                    </select>
                </label>
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    };
}

export default AddItem
