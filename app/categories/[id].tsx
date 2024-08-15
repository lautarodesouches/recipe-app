import RecipesList from '@/components/RecipesList'
import { COLORS } from '@/constants/colors'
import { getCategoryById, getRecipesByCategory } from '@/data/api'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({ title }: { title: string }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`${title} Recipes:`}</Text>
        </View>
    )
}

export default function DetailsScreen() {
    const { id } = useLocalSearchParams<{ id: string }>()

    const parsedId = parseInt(id)

    const category = getCategoryById(parsedId)

    if (!category) return <Redirect href={'/start'} />

    const recipes = getRecipesByCategory(parsedId)

    return <RecipesList recipes={recipes} header={() => <Header title={category.name} />} />
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    title: {
        fontSize: 20,
        color: COLORS.black
    }
})
