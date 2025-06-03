import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, ScrollView, Alert } from "react-native";
import Header from "../atoms/Header.common";
import { handleOtp, reSendOtp, sendOtp, verifyOtp } from "../network/APIHandling";
import { useRoute } from '@react-navigation/native';
const { width, height } = Dimensions.get('screen');

const OTPScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const phoneNumber = route?.params?.phoneNumber || '';
    const [keyboardStatus, setKeyboardStatus] = useState('closed');
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState('');

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

    const handleSendOtp = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const result = await handleOtp(phoneNumber, '/auth/send-otp');
        } catch (e) {
            if (e.response?.status === 429) {
                Alert.alert('Too Many Requests', 'Please wait before requesting another OTP.');
            } else {
                Alert.alert('Error', 'Failed to send OTP. Try again.');
            }
            console.error('Failed to send OTP', e);
        } finally {
            setLoading(false);
        }
    };

    const handleReSendOtp = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const result = await handleOtp(phoneNumber, '/auth/resend-otp');
        } catch (e) {
            if (e.response?.status === 429) {
                Alert.alert('Too Many Re-Send Requests', 'Please wait before requesting another OTP.');
            } else {
                Alert.alert('Error', 'Failed to re-send OTP. Try again.');
            }
            console.error('Failed to re-send OTP', e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleSendOtp();
    }, [])

    const verifyOTP = async() => {
        if (!otp || otp.length !== 6) {
            Alert.alert('Invalid OTP', 'Please enter the 6-digit OTP.');
            return;
        }
        setLoading(true);
        try {
            const result = await verifyOtp(phoneNumber, otp);
            console.log('OTP Verified:', result);
            // Navigate or store token based on result
            navigation.navigate('SelectLocation');
          } catch (e) {
            Alert.alert('Verification Failed', 'Invalid OTP or server error.');
            console.error('OTP verification failed:', e);
          } finally {
            setLoading(false);
          }
    }

    return (<SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header />
            <View style={styles.midView}>
                <Text style={styles.textStyle}>Enter your 4-digit code</Text>
                <Text style={styles.codeStyle}>Code</Text>
                <View style={styles.inputView}>
                    <TextInput
                        maxLength={6}
                        placeholder={'- - - - - -'}
                        placeholderTextColor={'#000'}
                        style={styles.inputText}
                        keyboardType="number-pad"
                        value={otp}
                        onChangeText={setOtp}
                    />
                </View>
            </View>
            <View style={styles.bottomView}>
                <Text style={[styles.resendText, loading && { opacity: 0.5 }]} onPress={!loading ? handleReSendOtp : undefined}>Resend Code</Text>
                <TouchableOpacity style={styles.proceedBtn} activeOpacity={0.6} onPress={verifyOTP}>
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