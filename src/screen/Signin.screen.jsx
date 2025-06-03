import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { height, width } = Dimensions.get('screen');

const Signinscreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleContinue = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      Alert.alert('Invalid Number', 'Please enter a valid 10-digit phone number.');
      return;
    } else {
      navigation.navigate('OTPScreen', { phoneNumber: `+91${phoneNumber}` });
    }
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/signInBg.png')}
        style={styles.imgStyle}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.text}>{`Get your groceries\nwith Minutos`}</Text>

        <View style={styles.phoneView}>
          <Image source={require('../assets/india.png')} style={styles.flag} resizeMode="contain" />
          <Text>+91</Text>
          <TextInput
            placeholder="Phone"
            maxLength={10}
            style={styles.inputText}
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => handleContinue()}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signinscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height * 0.5,
  },
  content: {
    marginTop: height * 0.45, // Push content below image
    paddingHorizontal: 25,
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    color: '#000',
    fontSize: 26,
    lineHeight: 34,
    fontFamily: 'Roboto',
    fontWeight: '600',
    marginBottom: 30,
  },
  phoneView: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: '#E2E2E2',
    marginBottom: 30,
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
  },
  flag: {
    height: 24,
    width: 34,
  },
  button: {
    backgroundColor: '#F26B6B',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
  },
});
