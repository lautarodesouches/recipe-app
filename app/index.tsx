import Recipe from '@/components/Recipe'
import { FlatList, StyleSheet, View } from 'react-native'
import data from '@/assets/data/recipes.json'
import { COLORS } from '@/constants/colors'

export default function Home() {
    const recipes = data

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
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
