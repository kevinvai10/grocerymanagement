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
                if(product.id === id) productExists = true;
            }
            //update existing element if exists
            if(productExists){
                const newCart = cart.map(product => {
                    if(product.id === id){
                        return {...product, amount: product.amount + 1}
                    } 
                    return product;
                })
                this.setState({cart: newCart}, () => {
                    this.addToCart(id);
                });
            } else{
                            const foundItem = products.find(product => product.id === id);
                            const newItem = {...foundItem, amount: 1}
                            this.setState((prevState) => ({cart: [...prevState.cart, newItem]}), () => {
                                this.addToCart(id);
                            })
            }
    }

    decrementCartItem(id){
        if(this.state.cart.length > 0){
            const newCart = this.state.cart.map(product => {
                if(product.id === id){
                    return product.amount > 0 ? {...product, amount: product.amount - 1} : product;
                } 
                return product;
            })
            this.setState({cart: newCart}, () => {
                this.addToCart(id);
            });
        } 
    }
    addToCart(id){
        //const newCart = this.countCartItemAmount(id);
        const newProducts = this.state.products.map(product => {
            if(product.id === id){
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
            if(product.id === id){
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
        const {products,search,cartTotal} = this.state;
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(this.state.search.toLowerCase()))
        const imgSrc = "https://icon-library.net/images/cart-icon-png-white/cart-icon-png-white-4.jpg"
        return(
            <div className="">
                <div>
                    <div className="cart">
                        <img src={imgSrc} alt="cart"/>
                        <h1>{`Total:$${cartTotal}`}</h1>
                    </div>
                    <SearchBar 
                        onChange={this.searchChange}
                        value={search}
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