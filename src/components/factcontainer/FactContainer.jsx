import React from 'react'
import  './FactContainer.style.css'
const FactContainer = (props) => {
    console.log(props.trivia)
    const {trivia} = props;
    return(
        <div className="">
            <h1>{`"${trivia}"`}</h1>
        </div>
    )
}

export default FactContainer;