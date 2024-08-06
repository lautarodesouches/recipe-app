import { COLORS } from '@/constants/colors'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import data from '@/assets/data/recipes.json'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

export default function DetailsScreen() {
    const { id } = useLocalSearchParams()

    const recipe = data.find(recipe => recipe.id.toString() === id)

    if (!recipe) return <Redirect href={'/recipes/not-found'} />

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} src={recipe.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{recipe.title}</Text>
                <Link style={styles.link} href={{ pathname: '/categories/[name]', params: { name: recipe.dishTypes[0] } }}>
                    <Text style={styles.subtitle}>{recipe.dishTypes[0]}</Text>
                </Link>
                <View style={styles.time}>
                    <FontAwesome6 name='clock' size={16} color='black' />
                    <Text style={styles.timeText}>{recipe.readyInMinutes} minutes</Text>
                </View>
                <Pressable style={styles.ingredients}>
                    <Text style={styles.ingredientsText}>View Ingredients</Text>
                </Pressable>
                <Text style={styles.description}>{recipe.summary}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    content: {
        flex: 1,
        padding: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: '600',
        color: COLORS.dark
    },
    link: {
        marginTop: 20,
        textAlign: 'center'
    },
    subtitle: {
        color: COLORS.secondary,
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    time: {
        width: '100%',
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    timeText: {
        fontSize: 16,
        color: COLORS.dark
    },
    ingredients: {
        marginHorizontal: 'auto',
        width: '60%',
        marginTop: 30,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        borderRadius: 10,
        paddingVertical: 8
    },
    ingredientsText: {
        textAlign: 'center',
        fontSize: 18,
        color: COLORS.secondary
    },
    description: {
        flex: 1,
        marginTop: 30,
        fontSize: 16,
        color: COLORS.dark
    }
})
