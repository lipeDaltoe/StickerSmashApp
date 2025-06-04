import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { PropsWithChildren } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>

export default function EmojiPicker({isVisible, children, onClose}: Props) {
  return (
    <View>
        <Modal animationType='slide' transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Pega um sticker fi!</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name='close' color='#fff' size={22} />
                    </Pressable>
                </View>
                { children }
            </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    modalContent: {
        height: '25%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '16%',
        // backgroundColor: '#464c55',
        backgroundColor: 'brown',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 16,
    }
})