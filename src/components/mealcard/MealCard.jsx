import React from 'react'
import './MealCard.style.css'
const MealCard = (props) => {
    const {name, imgSrc, ingredients} = props;
    console.log('props' , props);
    console.log('ingredients', ingredients);
    console.log('name', name);
    console.log('imgSrc', imgSrc);
    return(
        <div>
        <div className="mealcard-container">
            <img src={imgSrc} alt="recipe"/>
        </div>
            <h3>{name}</h3>
            <p>{(ingredients.length >= 1 && ingredients[0].original) ? ingredients[0].original : 'no ingredients available'}</p>
        </div>
    )
}

export default MealCard;