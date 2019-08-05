import React from 'react'

const Product = ({product, decrementCartItem, incrementCartItem, cart}) => {
    const handleDecrementCartItem = () =>{
        decrementCartItem(product.product_id)
    }
    const handleIncrementCartItem = () =>{
        incrementCartItem(product.product_id)
    }
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.store}</td>
            <td>{product.category}</td>
            <td>
                <button onClick={handleIncrementCartItem}>+</button>
                <button onClick={handleDecrementCartItem}>-</button>
            </td>
        </tr>
    )
}
export default Product;