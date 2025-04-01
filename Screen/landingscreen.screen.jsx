import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
  style={styles.image}
  source={require('../assets/minitos-White.png')} 
/>

      {/* <Text>Welcome to the Landing Screen!</Text> */}
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
