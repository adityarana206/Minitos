import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const { height, width } = Dimensions.get('screen');

const Signinscreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/signInBg.png')}
        style={styles.imgStyle}
        resizeMode={'contain'}
      />
      <Text style={styles.text}>{`Get your groceries\nwith Minutos`}</Text>

      <View style={styles.phoneView}>
        <Image source={require('../assets/india.png')} style={styles.flag} resizeMode={'contain'} />
        <Text>+91</Text>
        <TextInput
          placeholder='Phone'
          style={styles.inputText}
        />
      </View>


      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={()=>navigation.navigate('OTPScreen')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signinscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imgStyle: {
    height: height * 0.5,
    width: width
  },
  text: {
    color: '#000',
    fontSize: 26,
    lineHeight: 29,
    fontFamily: 'Roboto',
    fontWeight: '600',
    left: 25
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#F26B6B',
    bottom: 148,
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
  phoneView:{
    height: 40,
    width: width * 0.9,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    alignSelf:'center',
    borderBottomWidth:2,
    borderBottomColor:'#E2E2E2'
  },
  inputText:{
    width:255
  },
  flag: {
    height: 24,
    width: 34,

  }
})
