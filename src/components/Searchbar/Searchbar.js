import React, {Component} from 'react'
import './Searchbar.css';
class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
        }
        this.onChangeInput = this.onChangeInput.bind(this);
    }
    //filter array
    onChangeInput(event){
        this.setState({value: event.target.value}, () => {
            this.props.searchChange(this.state.value);
        });
    }

    render(){
        const {search, placeHolder} = this.props;
        return(
            <div>
                <input
                    className="searchbar-input"
                    value={search}
                    placeholder={placeHolder}
                    name="search"  
                    onChange={this.onChangeInput}           
                />
            </div>
        )
    }
}

export default Searchbar;