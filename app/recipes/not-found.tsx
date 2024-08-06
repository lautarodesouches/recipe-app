import { COLORS } from '@/constants/colors'
import { Link, Stack } from 'expo-router'
import { Text, View } from 'react-native'

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops!' }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: '500' }}>Recipe not found</Text>
                <Link
                    style={{
                        fontSize: 18,
                        fontWeight: '400',
                        marginTop: 20,
                        borderWidth: 1,
                        borderRadius: 5,
                        borderColor: COLORS.primary,
                        paddingVertical: 4,
                        paddingHorizontal: 20
                    }}
                    href={'/'}
                >
                    Go Home
                </Link>
            </View>
        </>
    )
}
