import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigation from './src/navigation/Index';
import CategoryWise from './src/screen/Productfilter';


function App(): React.JSX.Element {
  
  return (
    <View style={styles.container}>
        <AppNavigation />
    </View>
   
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});