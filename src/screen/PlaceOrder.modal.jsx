import { Dimensions, Modal, StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { height, width } = Dimensions.get('screen');

const PlaceOrder = ({ modalVisible, setModalVisible }) => {
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
            </View>
        </Modal>
    )
}

export default PlaceOrder;

const styles = StyleSheet.create({
    container: {
        height: height * 0.5,
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
        left:80
    }
})