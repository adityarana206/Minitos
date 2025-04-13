import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Button from "../atoms/Button.common";
import { useNavigation } from "@react-navigation/native";

const TrackOrder = () => {
    const navigation = useNavigation();
    return (<View style={styles.container}>
        <Image source={require('../assets/trackOrder.png')} style={styles.imageStyle} resizeMode={'contain'}/>
        <Text style={styles.textStyle}>{'Your Order has been\naccepted'}</Text>
        <Text style={styles.subTextStyle}>{`Your items has been placcd and is on \nit’s way to being processed`}</Text>
        <Button title={'Track Order'} customStyle={styles.buttomView}/>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.8} onPress={()=>navigation.navigate('TabNavigator')}>
            <Text style={styles.backText}>Back to home</Text>
        </TouchableOpacity>
    </View>)
}

export default TrackOrder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        height: 240,
        width: 270
    },
    textStyle:{
        textAlign:'center',
        fontSize:28,
        fontWeight:'600',
        fontFamily:'Roboto',
        color:'#181725'
    },
    subTextStyle:{
        marginTop:25,
        textAlign:'center',
        fontSize:16,
        lineHeight:21,
        fontWeight:'500',
        fontFamily:'Roboto',
        color:'#7C7C7C'
    },
    buttomView:{
        position:'absolute',
        bottom:100
    },
    backButton:{
        padding:10,
        alignSelf:'center',
        position:'absolute',
        bottom:50
    },
    backText:{
        color:'#181725',
        fontFamily:'Roboto',
        fontWeight:'600',
        fontSize:18,
        lineHeight:18
    }
})