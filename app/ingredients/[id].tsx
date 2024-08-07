import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function IngredientById() {
    const { id } = useLocalSearchParams<{ id: string }>()

    return (
        <View>
            <Text>ID: {id}</Text>
        </View>
    )
}
