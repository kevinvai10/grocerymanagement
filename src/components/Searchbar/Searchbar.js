import React, {Component} from 'react'
import ProductList from '../ProductList/ProductList';
import './Searchbar.css';
const url = "http://localhost:3002/products/";
class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: "",
            products: [],
        }
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    //filter array
    onChangeInput(event){
        this.setState({search: event.target.value});
    }
    //favorites functionality
    //select element and star it, so element state shows this is favorite
    componentDidMount(){
        fetch(url).then(response =>{
            return response.json();
        }).then(products => {
            this.setState({
                products: products
            })
        }).catch(err => alert('no products or something went wrong'))
    }

    render(){
        const {search, products} = this.state;
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
        return(
            <div>
                <input
                    className="searchbar-input"
                    value={this.state.search}
                    placeholder="Search product by name"
                    name="search"  
                    onChange={this.onChangeInput}           
                />
                <ProductList products={filteredProducts}/>
            </div>
        )
    }
}

export default Searchbar;