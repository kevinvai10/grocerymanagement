import React, {useState} from 'react'


class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit : false,
            newPrice: '',
        }
    }
    
        handleChange = (event) => {
            this.setState({newPrice: event.target.value});
        }
        handleDecrementCartItem = () =>{
            this.props.decrementCartItem(this.state.product.product_id)
        }
        handleIncrementCartItem = () =>{
            this.props.incrementCartItem(this.state.product.product_id)
        }
        handleEdit = () => {
            this.props.edit(this.props.product.product_id, this.state.newPrice);
            this.setState({isEdit: false})
        }
    render(){
        const {product} = this.props;
        const {isEdit, newPrice} = this.state
        return (
            <tr>
                <td>{product.name}</td>
                {
                    isEdit ? 
                    <input 
                        onChange={this.handleChange} 
                        placeholder={product.price} 
                        value={newPrice}
                        />
                        :
                        <td>{product.price}</td>
                }
                <td>{product.store}</td>
                <td>{product.category}</td>
                <td>
                    <button onClick={this.handleIncrementCartItem}>+</button>
                    <button onClick={this.handleDecrementCartItem}>-</button>
                    {
                        this.state.isEdit ? 
                        <button onClick={this.handleEdit}>Save</button>
                        :
                        <button onClick={() => this.setState({isEdit: true})}>Edit price</button>
                    }
                </td>
            </tr>
        )
    }
}
    
export default Product;