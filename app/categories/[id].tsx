import RecipesList from '@/components/RecipesList'
import { getCategoryById, getRecipesByCategory } from '@/data/api'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react'

export default function DetailsScreen() {
    const { id } = useLocalSearchParams<{ id: string }>()

    const parsedId = parseInt(id)

    const category = getCategoryById(parsedId)

    if (!category) return <Redirect href={'/start'} />

    const recipes = getRecipesByCategory(parsedId)

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            title: `${category.name} Recipes`
        })
    }, [navigation])

    return <RecipesList recipes={recipes} />
}
