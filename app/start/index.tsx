import RecipesList from '@/components/RecipesList'
import { COLORS } from '@/constants/colors'
import { getRecipeByNameCategoryOrIngredient } from '@/data/api'
import { Recipe } from '@/types'
import { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { useDebounce } from 'use-debounce'

export default function Home() {
    const [results, setResults] = useState<Recipe[]>([])
    const [query, setQuery] = useState('')
    const [value] = useDebounce(query, 1000)

    const handleChange = (text: string) => {
        setQuery(text)
    }

    useEffect(() => {
        setResults(getRecipeByNameCategoryOrIngredient(value))
    }, [value])

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Search recipes by name, category or ingredients'
                placeholderTextColor={'#6E7E85'}
                onChangeText={handleChange}
            />
            <RecipesList recipes={results} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        margin: 20,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})
