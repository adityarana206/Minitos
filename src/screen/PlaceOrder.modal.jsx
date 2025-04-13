import { useNavigation } from "@react-navigation/native";
import { Dimensions, Modal, StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('screen');

const PlaceOrder = ({ modalVisible, setModalVisible }) => {
    const navigation = useNavigation();
    const optionDetails = [{
        optionTitle: 'Delivery',
        option: 'Select Method'
    },
    {
        optionTitle: 'Pament',
        option: 'CardImage'
    },
    {
        optionTitle: 'Promo Code',
        option: 'Pick discount'
    },
    {
        optionTitle: 'Total Cost',
        option: '$13.97'
    }
    ]

    const RenderDetail = ({ item }) => {
        return (<View style={styles.itemView}>
            <Text style={styles.titleText}>{item?.optionTitle}</Text>
            <View style={styles.itemSubView}>
                {item?.option === 'CardImage' ?
                    <Image source={require('../assets/card.png')} style={styles.card} /> :
                    <Text style={styles.optiontext}>{item?.option}</Text>}
                <MaterialIcons
                    name="navigate-next"
                    size={30}
                    color="#000"
                />
            </View>
        </View>)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textStyle}>Checkout</Text>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <MaterialIcons
                            name="clear"
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={optionDetails}
                    renderItem={RenderDetail}
                />
                <View style={styles.bottomDetails}>
                    <Text style={styles.discriptionText}>{`By placing an order you agree to our \n`}<Text style={{ color: '#181725' }}>Terms</Text> {`And`} <Text style={{ color: '#181725' }}>Conditions</Text></Text>
                    <View style={styles.homeOption}>
                        <Text style={styles.homeOptionText}>Home</Text>
                        <Text style={styles.homeOptionText}>Profile</Text>
                    </View>
                    {/* Place Order  Button */}
                    <TouchableOpacity style={styles.applyButton} onPress={() => {
                        setModalVisible(!modalVisible)
                        navigation.navigate('TrackOrder')
                    }}>
                        <Text style={styles.applyText}>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default PlaceOrder;

const styles = StyleSheet.create({
    container: {
        width: width,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#F2F3F2'
    },
    header: {
        width: width,
        height: 90,
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#E2E2E2B2',
        borderBottomWidth: 1
    },
    textStyle: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 20,
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 360,
        height: 60,
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2B2'
    },
    titleText: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Roboto',
        color: '#7C7C7C'
    },
    itemSubView: {
        width: 150,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    optiontext: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Roboto',
        color: '#181725'
    },
    card: {
        height: 16,
        width: 22,
        left: 80
    },
    bottomDetails: {
        width: width
    },
    discriptionText: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '600',
        fontFamily: 'Roboto',
        color: '#7C7C7C',
        left: 25,
        marginTop: 20
    },
    homeOption: {
        width: width * 0.85,
        height: 30,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    homeOptionText: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Roboto',
        color: '#344356',
    },
    applyButton: {
        backgroundColor: '#F26B6B',
        padding: 15,
        width: 364,
        alignSelf: 'center',
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 50
    },
    applyText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
})