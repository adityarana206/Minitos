import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "./Button.common";
const { height } = Dimensions.get('screen');
const OrderFaild = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/failImage.png')} style={styles.imageStyle} resizeMode={'contain'} />
            <Text style={styles.oopsText}>Oops! Order Failed</Text>
            <Text style={styles.somethingText}>Something went tembly wrong.</Text>
            <Button title={'Please Try Again'} customStyle={styles.buttomView} />
            <TouchableOpacity style={styles.backButton} activeOpacity={0.8} onPress={() => navigation.navigate('TabNavigator')}>
                <Text style={styles.backText}>Back to home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OrderFaild;

const styles = StyleSheet.create({
    container: {
        height: '85%',
        width: '100%',
        marginTop: 15
    },
    imageStyle: {
        height: 222,
        width: 222,
        alignSelf: 'center'
    },
    oopsText: {
        fontFamily: 'Roboto',
        fontSize: 28,
        color: '#181725',
        fontWeight: '600',
        textAlign:'center',
        marginVertical:15
    },
    somethingText:{
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight:21,
        color: '#7C7C7C',
        fontWeight: '500',
        textAlign:'center',
    },
    buttomView: {
        position: 'absolute',
        width: '100%',
        bottom: 100
    },
    backButton: {
        padding: 10,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50
    },
    backText: {
        color: '#181725',
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 18
    }
})