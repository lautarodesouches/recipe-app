export type Recipe = {
    vegetarian: boolean
    vegan: boolean
    glutenFree: boolean
    dairyFree: boolean
    veryHealthy: boolean
    cheap: boolean
    veryPopular: boolean
    sustainable: boolean
    lowFodmap: boolean
    weightWatcherSmartPoints: number
    gaps: string
    preparationMinutes: null
    cookingMinutes: null
    aggregateLikes: number
    healthScore: number
    creditsText: string
    license?: string
    sourceName: string
    pricePerServing: number
    extendedIngredients: Array<any>
    id: number
    title: string
    readyInMinutes: number
    servings: number
    sourceUrl: string
    image: string
    imageType: string
    summary: string
    cuisines: Array<string>
    dishTypes: Array<string>
    diets: Array<string>
    occasions: Array<string>
    instructions: string
    analyzedInstructions: Array<any>
    originalId: string | null
    spoonacularScore: number
    spoonacularSourceUrl: string
}
