import { COLORS } from '@/constants/colors'
import { router } from 'expo-router'
import { Image, Pressable, StyleSheet, Text } from 'react-native'
import Animated, { FadeInLeft } from 'react-native-reanimated'

export default function Ingredient({
    index,
    item
}: {
    index: number
    item: { ingredientId: number; name: string; photo_url: string; amount?: string }
}) {
    return (
        <Animated.View style={styles.container} entering={FadeInLeft.delay(index * 300)}>
            <Pressable style={styles.link} onPress={() => router.navigate(`/start/ingredients/${item.ingredientId}`)}>
                <Image style={styles.image} src={item.photo_url} />
                <Text style={styles.title}>{item.name}</Text>
                {item.amount && <Text style={styles.text}>{item.amount}</Text>}
            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1 / 3,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    link: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10
    },
    image: {
        backgroundColor: COLORS.white,
        width: 100,
        height: 100,
        borderRadius: 100
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.dark,
        textAlign: 'center'
    },
    text: {
        fontSize: 10,
        fontWeight: '300',
        color: COLORS.dark,
        textAlign: 'center'
    }
})
