import Recipe from '@/components/Recipe'
import { FlatList, StyleSheet, View } from 'react-native'
import { COLORS } from '@/constants/colors'
import { getAllRecipes } from '@/data/api'

export default function Home() {
    const recipes = getAllRecipes()

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                numColumns={2}
                keyExtractor={item => item.recipeId.toString()}
                renderItem={({ item }) => <Recipe {...item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.grey
    },
    text: {
        fontSize: 20
    }
})
