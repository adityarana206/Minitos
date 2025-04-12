import React, { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PlaceOrder from './PlaceOrder.modal';
const { width, height } = Dimensions.get('screen');

const CartScreen = () => {
  const [placeOrder, setPlaceOrder] = useState(false);
  const cartData = [{
    image: '../assets/chili.png',
    productName: 'Bell Pepper Red',
    amount: '1 Kg',
    quantity: 1,
    price: '4.99'
  },
  {
    image: '../assets/chili.png',
    productName: 'Organic Bananas',
    amount: '12 Kg',
    quantity: 1,
    price: '3.00'
  },
  {
    image: '../assets/chili.png',
    productName: 'Egg Chicken Red',
    amount: '4 pcs',
    quantity: 1,
    price: '1.99'
  },
  {
    image: '../assets/chili.png',
    productName: 'Ginger',
    amount: '250 gm',
    quantity: 1,
    price: '2.9'
  }
  ]

  const renderCartProduct = ({ item }) => {
    return (
      <View style={styles.itemView}>
        <Image source={require('../assets/chili.png')}
          style={styles.productImage}
          resizeMode={'contain'}
        />
        <View style={styles.detailView}>
          <View style={styles.prodNameView}>
            <Text style={styles.productName}>{item?.productName}</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <MaterialIcons
                name="close"
                size={20}
                color="#999"
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.amountText}>{item?.amount}</Text>
          <View style={styles.prodQuantityView}>
            <TouchableOpacity style={styles.decreiseView} activeOpacity={0.8}>
              <MaterialIcons
                name="remove"
                size={30}
                color="#B3B3B3"
                style={styles.searchIcon}
              />
            </TouchableOpacity>
            <Text style={styles.prodQuantityText}>{item?.quantity}</Text>
            <TouchableOpacity style={styles.decreiseView} activeOpacity={0.8}>
              <MaterialIcons
                name="add"
                size={30}
                color="#F26B6B"
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>${item?.price}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.findProduct}>My Cart</Text>
      </View>
      <Text style={styles.totalAmount}>Order Total:  3000/-</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cartData}
        renderItem={renderCartProduct}
      />
      {/* Apply Filter Button */}
      <TouchableOpacity style={styles.applyButton} onPress={() => setPlaceOrder(true)}>
        <Text style={styles.applyText}>Go to Checkout</Text>
      </TouchableOpacity>
      <PlaceOrder modalVisible={placeOrder} setModalVisible={setPlaceOrder} />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2'
  },
  findProduct: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#181725',
    left: 28,
    marginVertical: 20
  },
  itemView: {
    left: 28,
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.85,
    justifyContent: 'space-between',
    marginTop: 10,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2'
  },
  detailView: {
    height: 100,
    width: width * 0.6
  },
  productImage: {
    height: 65,
    width: 70
  },
  productName: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#181725',
  },
  prodNameView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  prodQuantityView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.35
  },
  prodQuantityText: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: 'Roboto',
    width: 40,
    textAlign: 'center',
    color: '#181725'
  },
  amountText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: '#7C7C7C',
    marginVertical: 10
  },
  decreiseView: {
    height: 45,
    width: 45,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  price: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '600',
    fontFamily: 'Roboto',
    position: 'absolute',
    right: 0,
    top: 60
  },
  applyButton: {
    backgroundColor: '#F26B6B',
    padding: 15,
    width: 364,
    alignSelf: 'center',
    borderRadius: 16,
    alignItems: 'center',
  },
  applyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
})