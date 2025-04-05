import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const OnboardingScreen = () => {  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/onboarding.jpeg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <Image style={styles.image} source={require('../assets/icon.png')} />
        <Text style={styles.text}>Welcome</Text>
        <Text style={styles.text1}>to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={()=>navigation.navigate('Signinscreen')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  image: {
    width: 120,
    height: 100,
    marginBottom: 5,
    marginTop: '70%',
    resizeMode: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    marginBottom: 0,
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    marginBottom: 20,
    opacity: 1,
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;