import React from 'react';
import Product from '../../components/product/Product';
import SearchBar from '../../components/Searchbar/Searchbar';
import {getProducts, editProductPrice, deleteProduct} from '../../utils/apicalls';
import './ProductList.css';
class ProductList extends React.Component{
    constructor(){
        super();
        this.state = {
            search: "",
            products: [],
            cart: [],
            cartTotal: 0,
            isShowCart: false,
        }

        this.calculateCartTotal = this.calculateCartTotal.bind(this);
        this.showCartItemsOnly = this.showCartItemsOnly.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.incrementCartItem = this.incrementCartItem.bind(this);
        this.decrementCartItem = this.decrementCartItem.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    calculateCartTotal(){
        const {cart} = this.state;
        const total = cart.reduce((acc, currval) => acc + currval.price * currval.amount, 0);
        return total;
    }

    showCartItemsOnly(){
        const {products,isShowCart} = this.state;
        if(isShowCart) return this.setState({isShowCart: false});
        const newCart = products.filter(product => product.isAddedToCart);
        this.setState({cart: newCart, isShowCart: true})
    }

    incrementCartItem(id){
        //find element in cart collection if it exists, else add it
        const {products} = this.state;
                const newProducts = products.map(product => {
                    if(product.id === id){
                        if(product.isAddedToCart)
                            return {...product, amount: (product.amount || 0) + 1}
                        else    
                            return {...product, amount: (product.amount || 0) + 1, isAddedToCart: true}
                    } 
                    return product;
                })
                //save cart items
                const newCart = newProducts.filter(product => product.isAddedToCart);

                this.setState({products: newProducts, cart: newCart}, () => {
                    this.setState({cartTotal: this.calculateCartTotal()});
                });
    }

    decrementCartItem(id){
            const newProducts = this.state.products.map(product => {
                if(product.id === id){
                    return product.amount > 0 
                    ? {...product, amount: product.amount - 1} 
                    : {...product, isAddedToCart: false};
                } 
                return product;
            })
            //update cart items
            const newCart = newProducts.filter(product => product.isAddedToCart);

            this.setState({products: newProducts, cart: newCart}, () => {
                this.setState({cartTotal: this.calculateCartTotal()});
            });
    }

    edit(id, newPrice){
        const data = {id, newPrice};
        editProductPrice(data).then(newproduct => {
            //edit new product in state instead of adding another call
            getProducts().then(products => this.setState({products: products}))
        });
    }

    delete(id){
        const {products} = this.state;
        //Call api
        /*deleteProduct(id).then(res => {
            getProducts().then(products => {
                this.setState({
                    products: products
                })
            })
        })*/
        deleteProduct(id).then(response => {
            //filter through current state
            const deletedProduct = response[0];
            const newProducts = products.filter(product => product.id !== deletedProduct.id);
            this.setState({products: newProducts});
        })
    }

    searchChange(value){
        this.setState({search: value})
    }

    componentDidMount(){
        getProducts().then(products => this.setState({products: products}))
    }
    
    render(){
        const imgSrc = "https://icon-library.net/images/cart-icon-png-white/cart-icon-png-white-4.jpg"
        const {products,search,cartTotal, isShowCart, cart} = this.state;
        const filteredProducts = isShowCart ? cart
                                : products
                                .filter(product => product.name.toLowerCase().includes(this.state.search.toLowerCase()))
        return(
            <div className="">
                <div>
                    <div className="cart">
                        <img src={imgSrc} onClick={this.showCartItemsOnly} alt="cart"/>
                        <h1>{`Total:$${cartTotal}`}</h1>
                    </div>
                    <div className="cart-options">
                        <SearchBar 
                            onChange={this.searchChange}
                            value={search}
                            placeHolder={"Search by name"}
                        />
                        <button onClick={this.showCartItemsOnly}>{isShowCart ? 'View Products' : 'View Cart'}</button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Store</th>
                            <th>Category</th>
                            <th>Add/remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && filteredProducts.map(product => (
                                <Product 
                                key={product.id} 
                                product={product} 
                                decrementCartItem={this.decrementCartItem} 
                                incrementCartItem={this.incrementCartItem} 
                                edit={this.edit}
                                delete={this.delete}
                                onClick={this.handleClick} 
                                />
                                )
                            )
                        }
                    </tbody>
            </table>
        </div>
)}
};

export default ProductList