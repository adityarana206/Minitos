import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AlertModal from '../atoms/Alert.modal';
import OrderFaild from '../atoms/OrderFaild.children';

const FavoriteScreen = () => {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text>Fail Btn</Text>
        </TouchableOpacity>
      </View>
      <AlertModal modalVisible={visible} setModalVisible={setVisible} children={<OrderFaild />}/>
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})