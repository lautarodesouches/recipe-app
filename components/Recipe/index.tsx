import { COLORS } from '@/constants/colors'
import { getCategoryById } from '@/data/api'
import { Recipe } from '@/types'
import { router } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function Item(recipe: Recipe) {
    const handlePress = (id: number) => {
        router.navigate({
            pathname: '/recipes/[id]',
            params: { id }
        })
    }

    const category = getCategoryById(recipe.categoryId)

    return (
        <View style={styles.container}>
            <Pressable style={styles.pressable} onPress={() => handlePress(recipe.recipeId)}>
                <View>
                    <Image style={styles.image} src={recipe.photo_url} />
                    <Text style={styles.title}>{recipe.title}</Text>
                </View>
                <Text style={styles.subtitle}>{category.name}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    pressable: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: COLORS.light,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 3
    },
    image: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: 'cover'
    },
    title: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        paddingHorizontal: 5
    },
    subtitle: {
        paddingBottom: 10,
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '300',
        textTransform: 'capitalize'
    }
})
