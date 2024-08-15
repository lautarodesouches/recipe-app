import { COLORS } from '@/constants/colors'
import { getNumberOfRecipesByCategory } from '@/data/api'
import { Category } from '@/types'
import { router } from 'expo-router'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function CategoryComponent({ index, item }: { index: number; item: Category }) {
    const numberOfRecipes = getNumberOfRecipesByCategory(item.id)

    const handlePress = () => {
        router.navigate(`/categories/${item.id}`)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Image style={styles.image} src={item.photo_url} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.text}>
                {numberOfRecipes} recipe{numberOfRecipes > 1 ? 's' : ''}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: COLORS.white
    },
    image: {
        width: '100%',
        height: 150
    },
    title: {
        marginTop: 5,
        textAlign: 'center',
        color: COLORS.black,
        fontSize: 20
    },
    text: {
        marginTop: 5,
        textAlign: 'center',
        color: COLORS.dark,
        fontSize: 16,
        marginBottom: 10
    }
})
