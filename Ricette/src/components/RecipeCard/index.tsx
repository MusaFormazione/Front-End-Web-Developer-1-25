import type { Recipe } from "../../domain/recipe.type"
import { TagList } from "../Tag"

import "./style.scss"
interface Props {
  recipe: Recipe
}
function RecipeCard({recipe}: Props ) {
  return <div key={recipe.id} className="recipe">
    <img src={recipe.image} alt={recipe.name} width={200} />
    <h4>{recipe.name}</h4>
    <TagList tags={recipe.tags} />
  </div>
}

export default RecipeCard
