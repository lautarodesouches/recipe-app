import { COLORS } from '@/constants/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { StyleSheet, ScrollView } from 'react-native'
import data from '@/assets/data/recipes.json'

export default function DetailsScreen() {
    const { name } = useLocalSearchParams()

    const recipe = data.find(recipe => recipe.id.toString() === name)

    if (!recipe) return <Redirect href={'/categories/not-found'} />

    return <ScrollView style={styles.container}></ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light
    }
})
