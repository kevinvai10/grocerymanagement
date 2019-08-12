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
            this.props.onChange(this.state.value);
        });
    }

    render(){
        const {value, placeHolder} = this.props;
        console.log('search: ', value)
        return(
            <div>
                <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-15"
                    value={value}
                    placeholder={placeHolder}
                    name="search"  
                    onChange={this.onChangeInput}           
                />
            </div>
        )
    }
}

export default Searchbar;