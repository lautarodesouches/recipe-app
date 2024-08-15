import { COLORS } from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MenuButton = ({ icon, text, handlePress }: { icon: any; text: string; handlePress: () => void }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Ionicons name={icon} size={20} color={COLORS.black} />
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default function DrawerContent(props: DrawerContentComponentProps) {
    const { navigate } = props.navigation

    return (
        <View style={styles.container}>
            <MenuButton icon='home-outline' text='Home' handlePress={() => navigate('start')} />
            <MenuButton icon='file-tray-outline' text='Categories' handlePress={() => navigate('categories')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 20,
        padding: 20
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    buttonText: {
        color: COLORS.black,
        fontSize: 20
    }
})
