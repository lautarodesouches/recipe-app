import BackButton from '@/components/BackButton'
import { Stack } from 'expo-router'
import { Drawer } from 'expo-router/drawer'

export default function StackLayout() {
    return (
        <>
            <Drawer.Screen options={{ headerShown: false }} />
            <Stack
                screenOptions={{
                    headerTitleStyle: {
                        fontWeight: '600'
                    },
                    headerTitleAlign: 'center',
                    headerBackButtonMenuEnabled: true
                }}
            >
                <Stack.Screen name='category/[id]' />
                <Stack.Screen
                    name='ingredients/[id]'
                    options={{
                        headerLeft: BackButton,
                        headerTransparent: true,
                        title: ''
                    }}
                />
                <Stack.Screen
                    name='ingredients/for-recipe/[recipeId]'
                    options={({ route }: { route: any }) => ({ title: `Ingredients for ${route.params.recipeName}` })}
                />
                <Stack.Screen name='recipe/[id]' options={{ headerLeft: BackButton, title: '', headerTransparent: true }} />
            </Stack>
        </>
    )
}
