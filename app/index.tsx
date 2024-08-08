import { getAllRecipes } from '@/data/api'
import RecipesList from '@/components/RecipesList'

export default function Home() {
    const recipes = getAllRecipes()

    return <RecipesList recipes={recipes} />
}
