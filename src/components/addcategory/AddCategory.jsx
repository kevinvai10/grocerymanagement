import React, {Component} from 'react';
import {addCategory} from '../../utils/apicalls';

class AddCategory extends Component{
    constructor(){
        super();
        this.state = {
            category_name: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({category_name: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const newCategory = {
                name: this.state.category_name,
        }

        addCategory(newCategory).then(response => {
            alert("category added")
            this.setState({
                category_name: "",
            })
        })
        .catch(err => alert('not saved :/')) // parses JSON response into native Javascript objects 
    }

    async componentDidMount(){

    }

        render(){
            const {category_name} = this.state;
            return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <form className="measure" onSubmit={this.handleSubmit}>
                        <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Add category</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 required" htmlFor="">Name of the category</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required value={category_name} onChange={this.handleNameChange} type="text" name="" id="" />
                            </div>
                        </fieldset>
                        <div>
                            <input  
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Add" />
                        </div>
                    </form>
                </main>
            </article >
            )
        }
    }

export default AddCategory;