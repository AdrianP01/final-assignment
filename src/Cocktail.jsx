import React from 'react';




function Cocktail({ data }) {
  return (
    <div className="cocktail-card">
      <h2>{data.strDrink}</h2>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <p><strong>Category:</strong> {data.strCategory}</p>
      <p><strong>Instructions:</strong> {data.strInstructions}</p>
      <p><strong>Ingredients:</strong></p>
      <ul>
        {Array.from({ length: 15 }).map((_, index) => {
          const ingredient = data[`strIngredient${index + 1}`];
          const measure = data[`strMeasure${index + 1}`];
          return ingredient ? (
            <li key={index}>{measure ? `${measure} of` : ''} {ingredient}</li>
          ) : null;
        })}
      </ul>
    </div>
  );
}


export default Cocktail;
