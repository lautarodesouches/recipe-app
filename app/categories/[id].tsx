import { COLORS } from '@/constants/colors'
import { getCategoryById } from '@/data/api'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function DetailsScreen() {
    const { id } = useLocalSearchParams<{ id: string }>()

    const category = getCategoryById(parseInt(id))

    if (!category) return <Redirect href={'/categories/not-found'} />

    return <View style={styles.container}>
        <Text>Category {category.name}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light
    }
})
