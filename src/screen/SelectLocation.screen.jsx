import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../atoms/Header.common";
const { width, height } = Dimensions.get('screen');

const SelectLocation = ({ navigation }) =>     {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Image source={require('../assets/mapIcon.png')} resizeMode={'contain'} style={styles.mapStyle} />
            <View style={styles.subConatiner}>
                <Text style={styles.selectText}>Select Your Location</Text>
                <Text style={styles.discriptionText}>{`Switch on your location to stay in tune with\nwhat’s happening in your area`}</Text>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.lable}>{`Your Zone`}</Text>
                <View style={styles.dropDownView}>
                    <Text style={styles.selectedText}>{`Banasree`}</Text>
                    <Image source={require('../assets/downArrow.png')} style={styles.downImage} resizeMode={'contain'}/>
                </View>

                <Text style={[styles.lable,{marginTop:30}]}>{`Your Area`}</Text>
                <View style={styles.dropDownView}>
                    <Text style={[styles.selectedText,{color: '#7C7C7C'}]}>{`Types of your area`}</Text>
                    <Image source={require('../assets/downArrow.png')} style={styles.downImage} resizeMode={'contain'}/>
                </View>

            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
        
    )
}
export default SelectLocation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    mapStyle: {
        width: 200,
        height: 150,
        marginTop: 10
    },
    selectText: {
        fontSize: 26,
        lineHeight: 29,
        fontFamily: 'Roboto',
        fontWeight: '600',
        color: '#181725',
        textAlign: 'center'
    },
    discriptionText: {
        fontSize: 16,
        lineHeight: 15,
        fontFamily: 'Roboto',
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 10,
        color: '#7C7C7C'
    },
    subConatiner: {
        height: 100,
        width: width * 0.85,
        marginTop: 30
    },
    bottomView: {
        width: width * 0.85,
        height: height * 0.25
    },
    lable:{
        fontSize: 16,
        lineHeight: 29,
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#7C7C7C'
    },
    dropDownView:{
        height:38,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:2,
        borderBottomColor:'#E2E2E2'
    },
    selectedText:{
        fontSize: 18,
        lineHeight: 29,
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#181725'
    },
    downImage:{
        height:18,
        width:10
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#F26B6B',
        bottom: 151,
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 12,
        width: '80%',
        alignItems: 'center',
        position: 'absolute'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
    },
})