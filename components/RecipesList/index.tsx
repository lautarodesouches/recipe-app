import Recipe from '@/components/Recipe'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '@/constants/colors'
import { Recipe as RecipeType } from '@/types'
import { ReactElement } from 'react'

const EmptyComponent = () => {
    return <Text style={styles.emptyText}>No recipes found</Text>
}

export default function RecipesList({ recipes, header }: { recipes: RecipeType[]; header?: () => ReactElement }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                numColumns={2}
                keyExtractor={item => item.recipeId.toString()}
                renderItem={({ item }) => <Recipe {...item} />}
                ListHeaderComponent={header}
                ListEmptyComponent={EmptyComponent}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light
    },
    emptyText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
        color: COLORS.dark
    }
})
