import React, {Component} from 'react'
import ProductList from '../ProductList/ProductList'
const url = "http://localhost:3002/products/";

class ProductUpdate extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            products: ""
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log('what did i click? ' , this);
        console.log('what did i click? ' , e.target.value);

    }

    componentDidMount(){
        fetch(url).then(response => response.json())
        .then(products => this.setState({products: products}))
    }

    render(){
        const {products} = this.state;
        return(
            <div>
                <ProductList products={products} handleClick={this.handleClick} />
            </div>
        )
    }
}
export default ProductUpdate;
