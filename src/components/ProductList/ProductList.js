import React from 'react';
import Product from '../product/Product';
import SearchBar from '../Searchbar/Searchbar';
import {getProducts, editProductPrice, deleteProduct} from '../../utils/apicalls';
import '../ProductList/ProductList.css';

class ProductList extends React.Component{
    constructor(){
        super();
        this.state = {
            search: "",
            products: [],
            cart: [],
            cartTotal: 0,
        }
        this.addToCart = this.addToCart.bind(this);
        this.calculateCartTotal = this.calculateCartTotal.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.incrementCartItem = this.incrementCartItem.bind(this);
        this.decrementCartItem = this.decrementCartItem.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    calculateCartTotal(){
        const total = this.state.cart.reduce((acc, currval) => acc + currval.price * currval.amount, 0);
        return total;
    }

    incrementCartItem(id){
        //find element in cart collection if it exists, else add it
        const {cart, products} = this.state;
        let productExists = false;
            for(let product of cart){
                if(product.product_id === id) productExists = true;
            }
            //update existing element if exists
            if(productExists){
                const newCart = this.state.cart.map(item => {
                    if(item.product_id === id){
                        return {...item, amount: item.amount + 1}
                    } 
                    return item;
                })
                this.setState({cart: newCart}, () => {
                    this.addToCart(id);
                });
            } else{
                            const foundItem = products.find(product => product.product_id === id);
                            const newItem = {...foundItem, amount: 1}
                            this.setState((prevState) => ({cart: [...prevState.cart, newItem]}), () => {
                                this.addToCart(id);
                            })
            }
    }

    decrementCartItem(id){
        if(this.state.cart.length > 0){
            const newCart = this.state.cart.map(item => {
                if(item.product_id === id){
                    return item.amount > 0 ? {...item, amount: item.amount - 1} : item;
                } 
                return item;
            })
            this.setState({cart: newCart}, () => {
                this.addToCart(id);
            });
        } 
    }
    addToCart(id){
        //const newCart = this.countCartItemAmount(id);
        const newProducts = this.state.products.map(product => {
            if(product.product_id === id){
                return product.isAddedToCart ? {...product, isAddedToCart: false} : {...product, isAddedToCart: true};
            }
            return product;
        })
        this.setState({products: newProducts}, function(){
            this.setState({cartTotal: this.calculateCartTotal()})
        });
    }

    removeFromCart(id){
        const newProducts = this.state.products.map(product => {
            if(product.product_id === id){
                return product.isAddedToCart ? {...product, isAddedToCart: false} : {...product, isAddedToCart: true};
            }
            return product;
        })
        this.setState({products: newProducts}, function(){
            this.setState({cartTotal: this.calculateCartTotal()})
        });
    }

    edit(id, newPrice){
        const data = {id, newPrice};
        editProductPrice(data).then(newproduct => {
            //edit new product in state instead of adding another call
            getProducts().then(products => {
                this.setState({
                    products: products
                })
            })
        });
    }

    delete(id){
        //Call api
        deleteProduct(id).then(res => {
            getProducts().then(products => {
                this.setState({
                    products: products
                })
            })
        })
    }

    searchChange(value){
        this.setState({search: value})
    }

    componentDidMount(){
        getProducts().then(products => {
            console.log('current products:' , products);
            this.setState({
                products: products
            })
        })
    }
    render(){
        const {products} = this.state;
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(this.state.search.toLowerCase()))
        return(
            <div className="">
                <div>
                    <h1>{`Total:$${this.state.cartTotal}`}</h1>
                    <SearchBar 
                    searchChange={this.searchChange}
                    value={this.state.search}
                    placeHolder={"Search by name"}
                    />
                </div>
                <div className="flex-container scroll-table">
                <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Store</th>
                                        <th>Category</th>
                                        <th>Add/remove</th>
                                    </tr>
                                </thead>
                                <tbody className="scroll-table">
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
            </div>
        )
    }
};

export default ProductList