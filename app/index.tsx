import { Redirect, useFocusEffect, useNavigationContainerRef, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { Text } from 'react-native'

export default function Index() {
    /* const navigation = useNavigationContainerRef()

    const [ready, setReady] = useState(false)

    const router = useRouter()

    useEffect(() => {
        if (!navigation?.isReady) return

        setReady(true)

        console.log('REPLACE')
        router.replace('/start')

        console.log('PUSH')
        router.push('/start')

        console.log('NAV')
        router.navigate('/start')

        console.log('END')
    }, [navigation?.isReady])

    useFocusEffect(() => {
        console.log('REPLACE')
        router.replace('/start')

        console.log('PUSH')
        router.push('/start')

        console.log('NAV')
        router.navigate('/start')

        console.log('END')
    }, []) */

    return <Text>Initial</Text>
}
