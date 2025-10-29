import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import type { RootState } from "../store/storeRicette";
import type { Recipe } from "../domain/recipe.type";
import Template from "./Template";

import "./Recipe.scss";

const initalState: Recipe | null = null

function Recipe() {
  const { id } = useParams();
  const ricette = useSelector((state: RootState) => state.ricette)
  const [ricetta, setRicetta] = useState(initalState);

  useEffect(() => {
    if (id && ricette.recipe?.recipes?.length > 0) {
      const foundRecipe = ricette.recipe.recipes.find((r) => r.id === parseInt(id, 10)) || null;
      setRicetta(foundRecipe);
    }
  }, [id, ricette.recipe]);

  if (ricetta === null) {
    return <Template page="recipe">
      <div className="recipeContainer">
        <p>Ricetta non trovata</p>
      </div>
    </Template>;
  }

  return <Template page="recipe">
    <div className="recipeContainer">
        <h2 className="recipeTitle">{ricetta.name}</h2>
        <img src={ricetta.image} alt={ricetta.name} width={400} className="recipeImage" />

        <div className="recipeIngredients">
          <h3>Ingredients</h3>
          <ul>
            {ricetta.ingredients.map((ingredient, index) => (
              <li key={index}>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="recipeOverview">
          <h3>Overview</h3>
          <p><span>Prep Time:</span> <span>{ricetta.prepTimeMinutes} minutes</span></p>
          <p><span>Cook Time:</span> <span>{ricetta.cookTimeMinutes} minutes</span></p>
          <p><span>Servings:</span> <span>{ricetta.servings}</span></p>
        </div>

        <div className="recipeInstructions">
          <h3>Instructions</h3>
          <p>{ricetta.instructions.join(" ")}</p>
        </div>
      </div>
  </Template>
}

export default Recipe;
