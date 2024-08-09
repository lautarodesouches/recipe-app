import BackButton from '@/components/BackButton'
import { Stack, useNavigationContainerRef } from 'expo-router'
import { Drawer } from 'expo-router/drawer'

export default function Layout() {
    const navigation = useNavigationContainerRef()

    const routeName = navigation.getCurrentRoute()?.name

    const isIndex = routeName === undefined || routeName === 'index'

    return (
        <>
            <Drawer.Screen options={{ headerShown: isIndex }} />
            <Stack
                screenOptions={{
                    headerTitleStyle: {
                        fontWeight: '600'
                    },
                    headerTitleAlign: 'center',
                    headerBackButtonMenuEnabled: true,
                    headerLeft: BackButton
                }}
            >
                <Stack.Screen name='index' options={{ headerShown: false }} />
                <Stack.Screen
                    name='ingredients/[id]'
                />
                <Stack.Screen
                    name='ingredients/for-recipe/[recipeId]'
                    options={({ route }: { route: any }) => ({ title: `Ingredients for ${route.params.recipeName}` })}
                />
                <Stack.Screen name='recipe/[id]' options={{ title: '', headerTransparent: true }} />
            </Stack>
        </>
    )
}
