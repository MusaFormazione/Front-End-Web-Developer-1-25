import type { Recipe } from "../../domain/recipe.type"
import "./style.scss"
interface Props {
  recipe: Recipe
}
function RecipeCard({recipe}: Props ) {
  return <div key={recipe.id} className="recipe">
    <img src={recipe.image} alt={recipe.name} width={200} />
    <h2>{recipe.name}</h2>
    <p>{recipe.tags.join(', ')}</p>
  </div>
}

export default RecipeCard
