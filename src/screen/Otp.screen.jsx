import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Dimensions, Image, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, ScrollView } from "react-native";
import Header from "../atoms/Header.common";
const { width, height } = Dimensions.get('screen');


const OTPScreen = () => {
    const navigation = useNavigation();
    const [keyboardStatus, setKeyboardStatus] = useState('closed');

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardStatus('open');
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardStatus('closed');
            }
        );
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);


    return (<SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header/>
            <View style={styles.midView}>
                <Text style={styles.textStyle}>Enter your 4-digit code</Text>
                <Text style={styles.codeStyle}>Code</Text>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder={'- - - -'}
                        placeholderTextColor={'#000'}
                        style={styles.inputText}
                    />
                </View>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.resendText}>Resend Code</Text>
                <TouchableOpacity style={styles.proceedBtn} activeOpacity={0.6} onPress={() => navigation.navigate('SelectLocation')}>
                    <Image source={require('../assets/RightArrow.png')} style={styles.backBtn} resizeMode={'contain'} />
                </TouchableOpacity>
            </View>
            {keyboardStatus === 'open' && <View style={styles.iosView} />}
        </ScrollView>
    </SafeAreaView>)
}

export default OTPScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    midView: {
        width: width * 0.88,
        height: height * 0.275,
        marginTop: 50
    },
    textStyle: {
        fontSize: 26,
        lineHeight: 29,
        fontFamily: 'Roboto',
        fontWeight: '600',
        color: '#181725'
    },
    codeStyle: {
        marginTop: 56,
        fontSize: 16,
        lineHeight: 29,
        color: '#7C7C7C',
        fontFamily: 'Roboto',
        fontWeight: '600',
    },
    inputView: {
        height: 55,
        width: width * 0.88,
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#E2E2E2'
    },
    inputText: {
        height: 50,
        width: width * 0.88,
        backgroundColor: ''
    },
    bottomView: {
        height: 100,
        width: width * 0.88,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iosView: {
        height: height * 0.5
    },
    resendText: {
        fontSize: 18,
        lineHeight: 29,
        fontFamily: 'Roboto',
        fontWeight: '500',
        color: '#F26B6B'
    },
    proceedBtn: {
        height: 70,
        width: 70,
        backgroundColor: '#F26B6B',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center'
    }
})