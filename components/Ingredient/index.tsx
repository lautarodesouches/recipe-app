import { COLORS } from '@/constants/colors'
import { router } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function Ingredient({ item }: { item: { id: number; name: string; photo_url: string; amount: string } }) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.link} onPress={() => router.navigate(`/ingredients/${item.id}`)}>
                <Image style={styles.image} src={item.photo_url} />
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.text}>{item.amount}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
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
        fontSize: 20,
        fontWeight: '400',
        color: COLORS.black,
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '300',
        color: COLORS.dark,
        textAlign: 'center'
    }
})
