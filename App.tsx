import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigation from './src/navigation/Index';
import CategoryWise from './src/screen/Product.screen';


function App(): React.JSX.Element {
  
  return (
    // <View style={styles.container}>
    //     <AppNavigation />
    // </View>
    <CategoryWise/>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});