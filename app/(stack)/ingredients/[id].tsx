import RecipesList from '@/components/RecipesList'
import { COLORS } from '@/constants/colors'
import { getIngredientById, getRecipesByIngredient } from '@/data/api'
import { Ingredient } from '@/types'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = ({ ingredient }: { ingredient: Ingredient }) => {
    return (
        <View style={styles.top}>
            <Image style={styles.image} src={ingredient.photo_url} />
            <Text style={styles.title}>Recipes with {ingredient.name}:</Text>
        </View>
    )
}

export default function IngredientById() {
    const { id } = useLocalSearchParams<{ id: string }>()

    const parsedId = parseInt(id)

    const ingredient = getIngredientById(parsedId)

    const recipes = getRecipesByIngredient(parsedId)

    if (!ingredient) return <Redirect href={'/'} />

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            title: ingredient.name
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <RecipesList recipes={recipes} header={() => <Header ingredient={ingredient} />} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        flex: 1,
        flexGrow: 1
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        margin: 15,
        color: COLORS.dark
    }
})
