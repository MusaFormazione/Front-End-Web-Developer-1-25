
import RecipeCard from "../RecipeCard"
import type { Recipe } from "../../domain/recipe.type"

import "./style.scss"

interface Props {
  recipes: Recipe[]
}

function RecipeList({ recipes }: Props) {
  return <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
}
export default RecipeList;
