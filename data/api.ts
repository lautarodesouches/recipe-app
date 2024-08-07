import { Recipe } from '@/types'
import categories from './categories'
import ingredients from './ingredients'
import recipes from './recipes'

// INGREDIENTS
export function getAllIngredients() {
    return ingredients
}

export function getIngredientById(ingredientId: number) {
    const ingredient = ingredients.find(ingredient => ingredient.ingredientId === ingredientId)

    if (!ingredient) throw Error(`Ingredient for id ${ingredientId} not found`)

    return ingredient
}

export function getIngredientesByRecipe(recipeId: number): {
    id: number
    name: string
    photo_url: string
    amount: string
}[] {
    const recipe = getRecipeById(recipeId)

    const ingredients: {
        id: number
        name: string
        photo_url: string
        amount: string
    }[] = recipe.ingredients.map(ingredient => {
        const detail = getIngredientById(ingredient[0])

        return {
            id: ingredient[0],
            name: detail.name,
            photo_url: detail.photo_url,
            amount: ingredient[1]
        }
    })

    return ingredients
}

// CATEGORIES
export function getAllCategories() {
    return categories
}

export function getCategoryById(categoryId: number) {
    const category = categories.find(category => category.id === categoryId)

    if (!category) throw Error(`Category for id ${categoryId} not found`)

    return category
}

// RECIPES
export function getAllRecipes() {
    return recipes
}

export function getRecipeById(recipeId: number) {
    const recipe = recipes.find(recipe => recipe.recipeId === recipeId)

    if (!recipe) throw Error(`Recipe for id ${recipeId} not found`)

    return recipe
}

export function getRecipesByCategory(categoryId: number) {
    const recipesForCategory: Recipe[] = recipes.filter(recipe => recipe.categoryId === categoryId)

    if (recipesForCategory.length === 0) throw Error('Recipes nto found')

    return recipesForCategory
}

export function getRecipesByIngredient(ingredientId: number) {
    const recipesFound = recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient[0] === ingredientId))

    return recipesFound
}

export function getNumberOfRecipesByCategory(categoryId: number) {
    let count = 0
    recipes.map(recipe => {
        if (recipe.categoryId == categoryId) count++
    })
    return count
}

// SEARCH
export function getRecipeByNameCategoryOrIngredient(query: string) {
    const lowerQuery = query.toLowerCase()

    // BY NAME
    const recipesByName = recipes.filter(recipe => recipe.title.toLowerCase().includes(lowerQuery))

    // BY CATEGORY
    const categoryIds = categories.filter(category => category.name.toLowerCase().includes(lowerQuery)).map(category => category.id)

    const recipesByCategory = recipes.filter(recipe => categoryIds.includes(recipe.categoryId))

    // BY INGREDIENT
    const ingredientIds = ingredients
        .filter(ingredient => ingredient.name.toLowerCase().includes(lowerQuery))
        .map(ingredient => ingredient.ingredientId)

    const recipesByIngredient = recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredientIds.includes(ingredient[0])))

    // ORGANIZE
    const combinedRecipes = [...recipesByName, ...recipesByCategory, ...recipesByIngredient]

    const uniqueRecipes = Array.from(new Set(combinedRecipes.map(recipe => recipe.recipeId))).map(
        id => combinedRecipes.find(recipe => recipe.recipeId === id)!
    )

    return uniqueRecipes
}
