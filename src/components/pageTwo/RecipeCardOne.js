import React from 'react';


function RecipeCardOne({ recipeData: { recipeOneID, recipeOneTitle, recipeOneDesc } }) {

    return (

        <div>
            <h3 className={'chooseRecipe__cardOne__title'}>{recipeOneTitle}</h3>
            <h5 className={'chooseRecipe__cardOne__header'}>You'll Need:</h5>
            {recipeOneDesc.map((desc, index) => {
                return <p className={'chooseRecipe__cardOne__desc'} key={index}>{desc}</p>
            })}
            <p className={'chooseRecipe__cardTwo__desc'} >.....</p>

        </div>
    )
}

export default RecipeCardOne;



