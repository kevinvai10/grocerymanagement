import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {addProduct, getStores, getCategories} from '../../utils/apicalls';
class ProductAdd extends Component{
    constructor(){
        super();
        this.state = {
            product_name: "",
            product_price: "",
            categories: "",
            stores: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({product_name: event.target.value});
    }

    handlePriceChange(event) {
        this.setState({product_price: event.target.value});
    }

    handleStoreChange(event) {
        const selectedStore = this.state.stores.find(store => store.store_name === event.target.value);
        this.setState({product_store: selectedStore.store_name, product_storeid: selectedStore.id});
    }

    handleCategoryChange(event) {
        //check what we got
        const selectedCategory = this.state.categories.find(category => category.category_name === event.target.value);
        this.setState({product_category: selectedCategory.category_name, product_categoryid: selectedCategory.id});
    }

    handleSubmit(event){
        event.preventDefault();

        const newProduct = {
                name: this.state.product_name,
                price: this.state.product_price,
                store: this.state.product_storeid,
                category: this.state.product_categoryid,
        }

        addProduct(newProduct).then(response => {
            alert("product added")
            this.setState({
                product_name: "",
                product_price: "",
                product_store: "",
                product_category: "",
                amount: 0
            })
        })
        .catch(err => alert('not saved :/')) // parses JSON response into native Javascript objects 
    }

    async componentDidMount(){
        //fecth from apis
        const stores = await getStores();
        const categories = await getCategories();
        this.setState({categories, stores});
    }

        render(){
            const {product_name, product_category, product_price, product_store, categories, stores} = this.state;
            return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <form className="measure" onSubmit={this.handleSubmit}>
                        <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Add product</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 required" htmlFor="">Name of the product</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required value={product_name} onChange={this.handleNameChange} type="text" name="" id="" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="">Price of the product</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required value={product_price} onChange={this.handlePriceChange} type="text" name="" id="password" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="">Category</label>
                                <select className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" value={product_category} onChange={this.handleCategoryChange} type="text" name="" id="password">
                                    <option>- Select -</option>
                                    {
                                        categories && categories.map(category => <option key={category.id}>{category.category_name}</option>)
                                    }
                                </select>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="">Store</label>
                                <select className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" value={product_store} onChange={this.handleStoreChange} type="text" name="" id="password">
                                    <option>- Select -</option>
                                    {
                                        stores && stores.map(store => <option key={store.id}>{store.store_name}</option>)
                                    }
                                </select>                            
                            </div>
                        </fieldset>
                        <div>
                            <input  
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Add" />
                        </div>
                        <div className="lh-copy mt3">
                        <Link to="/" className="f6 link dim black db pointer">Main page</Link>
                        </div>
                    </form>
                </main>
            </article >
            )
        }
    }

export default ProductAdd;