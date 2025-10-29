import { Link } from "react-router-dom"

import type { Recipe } from "../../domain/recipe.type"
import { TagList } from "../Tag"

import "./style.scss"

interface Props {
  recipe: Recipe
}
function RecipeCard({recipe}: Props ) {
  return <Link to={`/recipe/${recipe.id}`} className="recipe-link">
    <div className="recipe">
      <img src={recipe.image} alt={recipe.name}/>
      <h4>{recipe.name}</h4>
      <TagList tags={recipe.tags} />
    </div>
  </Link>
}

export default RecipeCard
