import React from 'react';
import '../ProductList/ProductList.css'

export default function ProductList(props){
    const products = props.products;
    return(
        <div className="flex-container">
            <div className="scroll-table">
            <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Store</th>
                                </tr>
                            </thead>
                            <tbody className="scroll-table">
                                {
                                    products && products.map(product => (
                                        <tr key={product.name + product.price} className="">
                                            <td className="">{product.name}</td>
                                            <td className="">{product.price}</td>
                                            <td className="">{product.store}</td>
                                        </tr>
                                        )
                                    )
                                }
                            </tbody>
                        </table>
            </div>
        </div>
    );
};