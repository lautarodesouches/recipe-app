import '@expo/metro-runtime'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary
} from 'expo-router'

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)'
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font
    })

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error
    }, [error])

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return <RootLayoutNav />
}

function RootLayoutNav() {
    return (
        <Stack
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: '600'
                },
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen name='index' options={{ title: 'Home' }} />
            <Stack.Screen name='recipe/[id]' options={{ title: 'Recipe', headerShown: false }} />
            <Stack.Screen name='recipe/not-found' options={{ title: 'Oops!' }} />
            <Stack.Screen name='ingredients/[id]' />
            <Stack.Screen
                name='ingredients/for-recipe/[recipeId]'
                options={({ route }: { route: any }) => ({ title: `Ingredients for ${route.params?.recipeName}` })}
            />
            <Stack.Screen name='categories/index' options={{ title: 'Categories' }} />
            <Stack.Screen name='categories/[id]' options={({ route }: { route: any }) => ({ title: `${route.params?.categoryName}` })} />
        </Stack>
    )
}
