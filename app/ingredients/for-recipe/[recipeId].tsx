import Ingredient from '@/components/Ingredient'
import { COLORS } from '@/constants/colors'
import { getIngredientesByRecipe } from '@/data/api'
import { useLocalSearchParams } from 'expo-router'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const EmptyComponent = () => {
    return <Text style={styles.text}>No ingredients found</Text>
}

export default function IngredientsPerRecipe() {
    const { recipeId } = useLocalSearchParams<{ recipeId: string }>()

    const ingredients = getIngredientesByRecipe(parseInt(recipeId))

    return (
        <View style={styles.container}>
            <FlatList data={ingredients} renderItem={Ingredient} keyExtractor={ingredient => ingredient.id.toString()} numColumns={3} ListEmptyComponent={EmptyComponent} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light
    },
    text: {
        textAlign: 'center',
        margin: 20,
        fontSize: 20,
        color: COLORS.dark
    }
})
