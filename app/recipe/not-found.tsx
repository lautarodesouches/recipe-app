import { COLORS } from '@/constants/colors'
import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function NotFoundScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Recipe not found</Text>
            <Link style={styles.link} href={'/'}>
                Go Home
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 24, fontWeight: '500' },
    link: {
        fontSize: 18,
        fontWeight: '400',
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.primary,
        paddingVertical: 4,
        paddingHorizontal: 20
    }
})
