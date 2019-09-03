import React from 'react'
import Searchbar from '../../components/Searchbar/Searchbar'
import MealCard from '../../components/mealcard/MealCard'
import FactContainer from '../../components/factcontainer/FactContainer'
import {getRecipes, getRandomTrivia} from '../../utils/apicalls';
import './MealPicker.style.css'

class MealPickerContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            recipes : null,
            ingredients: '',
            randomFact: null,
        }
    }

    handleIngredientChange = value => {
        this.setState({ingredients: value});
    }

    getIngredientFormat = () => {
        const {ingredients} = this.state;
        if(!ingredients) return alert('type into the box bro');
        const trimmedIngredients = ingredients.trim();
        if(trimmedIngredients.includes(',')) {
            const ingredientsArray = trimmedIngredients.split(',');
            const formattedIngredients = ingredientsArray.join(',+');
            return formattedIngredients + "&number=4";
        } else{
            return ingredients + "&number=4";
        }
        
    }

    handleClick = () => {
        //function to get ingredients
        const formattedIngredients = this.getIngredientFormat();
        getRecipes(formattedIngredients).then(recipes => this.setState({recipes: recipes, ingredients: ''}));
    }

    componentDidMount(){
        //random fact
        getRandomTrivia().then(trivia => this.setState({randomFact: trivia.text}))
    }
    render(){
        const {recipes, ingredients, randomFact} = this.state;
        return(
            <div className="mealpicker-container">
                <div className="mealpicker-options">
                    <Searchbar 
                        onChange={this.handleIngredientChange}
                        value={ingredients}
                        placeHolder={'separate by commas'}
                    />
                    <button onClick={this.handleClick}>Get meal</button>
                </div>
                <div className="meal-container">
                    {
                        recipes && recipes.map(recipe => <MealCard key={recipe.id} name={recipe.title} imgSrc={recipe.image} ingredients={recipe.usedIngredients}/>)
                    }

                    {
                        (!recipes && randomFact) ? <FactContainer trivia={randomFact}/> : null
                    }
                </div>
            </div>
        )
    }
}

export default MealPickerContainer;