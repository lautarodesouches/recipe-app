import Ingredient from '@/components/Ingredient'
import { getIngredientesByRecipe } from '@/data/api'
import { useLocalSearchParams } from 'expo-router'
import { FlatList, StyleSheet, View } from 'react-native'

export default function IngredientsPerRecipe() {
    const { recipeId } = useLocalSearchParams<{ recipeId: string }>()

    const ingredients = getIngredientesByRecipe(parseInt(recipeId))

    return (
        <View style={styles.container}>
            <FlatList data={ingredients} renderItem={Ingredient} keyExtractor={ingredient => ingredient.id.toString()} numColumns={2} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
