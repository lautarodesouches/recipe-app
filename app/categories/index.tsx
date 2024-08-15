import CategoryComponent from '@/components/Category'
import { getAllCategories } from '@/data/api'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function Categories() {
    const categories = getAllCategories()

    return (
        <View style={styles.container}>
            <FlatList contentContainerStyle={styles.list} data={categories} renderItem={CategoryComponent} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    list: {
        gap: 20
    }
})
