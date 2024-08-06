import { COLORS } from '@/constants/colors'
import { getCategoryById } from '@/data/api'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { StyleSheet, ScrollView } from 'react-native'

export default function DetailsScreen() {
    const { id } = useLocalSearchParams()

    const category = getCategoryById(parseInt(typeof id == 'string' ? id : id[0]))

    if (!category) return <Redirect href={'/categories/not-found'} />

    return <ScrollView style={styles.container}></ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light
    }
})
