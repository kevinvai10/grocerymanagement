import React from 'react'

const CartItem = () => {
    return (
        <tr onClick={handleAddToCart}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.store}</td>
            <td>{product.category}</td>
            <td>{product.isAddedToCart ? "yes" : "no"}</td>
        </tr>
    )
}

export default CartItem;