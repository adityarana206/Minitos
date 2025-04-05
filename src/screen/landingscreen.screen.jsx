import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'

const LandingScreen = () => {

  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnboardingScreen')
    }, 1000);
  }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/minitos-White.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F26B6B',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '11%',
    marginBottom: 20,
  },
})

export default LandingScreen
