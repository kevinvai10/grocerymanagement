import React from 'react'

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
            this.props.decrementCartItem(this.state.product.id)
        }
        handleIncrementCartItem = () =>{
            this.props.incrementCartItem(this.state.product.id)
        }
        handleEdit = () => {
            this.props.edit(this.props.product.id, this.state.newPrice);
            this.setState({isEdit: false})
        }
        handleDelete = () => {
            this.props.delete(this.props.product.id);
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
                <td>{product.store_name}</td>
                <td>{product.category_name}</td>
                <td>
                    <button onClick={this.handleIncrementCartItem}>+</button>
                    <button onClick={this.handleDecrementCartItem}>-</button>
                    {
                        this.state.isEdit ? 
                        <button onClick={this.handleEdit}>Save</button>
                        :
                        <button onClick={() => this.setState({isEdit: true})}>Edit price</button>
                    }
                    <button onClick={this.handleDelete}>x</button>
                </td>
            </tr>
        )
    }
}
    
export default Product;