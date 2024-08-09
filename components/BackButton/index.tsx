import { COLORS } from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { View } from 'react-native'

export default function BackButton() {
    const router = useRouter()

    return (
        <View style={{ backgroundColor: COLORS.white, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons name='chevron-back' size={36} color={COLORS.primary} onPress={() => router.back()} />
        </View>
    )
}
