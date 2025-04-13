import { Modal, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AlertModal = ({ modalVisible, setModalVisible,children }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.subContainer}>
                    <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisible(false)}>
                        <MaterialIcons
                            name="clear"
                            size={24}
                            color="#000"
                            style={styles.searchIcon}
                        />
                    </TouchableOpacity>
                    {children}
                </View>
            </SafeAreaView>
        </Modal>)
}
export default AlertModal;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subContainer: {
        height: 600,
        width: 350,
        borderRadius: 18,
        paddingHorizontal:25,
        backgroundColor: '#fff',
        alignSelf: "center"
    },
    closeBtn:{
        marginTop:25,
    },
})