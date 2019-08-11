import React from 'react'
import './Product.style.css'
import Searchbar from '../Searchbar/Searchbar';
class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit : false,
            newPrice: '',
        }
    }
    
        handleChange = (price) => {
            this.setState({newPrice: price});
        }
        handleDecrementCartItem = () =>{
            this.props.decrementCartItem(this.props.product.id)
        }
        handleIncrementCartItem = () =>{
            this.props.incrementCartItem(this.props.product.id)
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
                    <td>
                        <Searchbar 
                            onChange={this.handleChange} 
                            placeHolder={product.price} 
                            value={newPrice}
                            />
                    </td>
                        :
                        <td>{`$${product.price}`}</td>
                }
                <td>{product.store_name}</td>
                <td>{product.category_name}</td>
                <td>
                    <button className="product-button" onClick={this.handleIncrementCartItem}>+</button>
                    <button className="product-button" onClick={this.handleDecrementCartItem}>-</button>
                    {
                        this.state.isEdit ? 
                        <button className="product-button" onClick={this.handleEdit}>Save</button>
                        :
                        <button className="product-button" onClick={() => this.setState({isEdit: true})}>Edit price</button>
                    }
                    <button className="product-button" onClick={this.handleDelete}>x</button>
                </td>
            </tr>
        )
    }
}
    
export default Product;