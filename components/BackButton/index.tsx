import { COLORS } from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

export default function BackButton() {
    const router = useRouter()

    return <Ionicons name='chevron-back-circle' size={36} color={COLORS.black} onPress={() => router.back()} />
}
