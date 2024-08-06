import { COLORS } from '@/constants/colors'
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

    const getTitle = () => {
        let { title } = recipe

        if (title.length < 20) return title

        return `${title.slice(0, title.at(19) === ' ' ? 19 : 20)}...`
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.pressable} onPress={() => handlePress(recipe.id)}>
                <View>
                    <Image style={styles.image} src={recipe.image} />
                    <Text style={styles.title}>{getTitle()}</Text>
                </View>
                <Text style={styles.subtitle}>{recipe.dishTypes[0]}</Text>
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
