import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'tachyons';
const url = "http://localhost:3002/addproduct"

class ProductAdd extends Component{
    constructor(){
        super();
        this.state = {
            product_name: "",
            product_price: "",
            product_store: "",
            product_category: "",
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
        this.setState({product_store: event.target.value});
    }

    handleCategoryChange(event) {
        this.setState({product_category: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();

        const data = {
                name: this.state.product_name,
                price: this.state.product_price,
                store: this.state.product_store,
                category: this.state.product_category,
        }
        console.log('data: ' , data)
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => response.json())
        .then(response => {
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

        render(){
            const {product_name, product_category, product_price, product_store} = this.state;
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
                                <label className="db fw6 lh-copy f6" htmlFor="">Store</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required value={product_store} onChange={this.handleStoreChange} type="text" name="" id="password" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="">Category(optional)</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" value={product_category} onChange={this.handleCategoryChange} type="text" name="" id="password" />
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