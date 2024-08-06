export type Ingredient = {
    ingredientId: number,
    name: string,
    photo_url: string
}

export type Category = {
    id: number
    name: string
    photo_url: string
}

export type Recipe = {
    recipeId: number
    categoryId: number
    title: string
    photo_url: string
    photosArray: string[]
    time: number
    ingredients: [number, string][]
    description: string
}
