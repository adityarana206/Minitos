import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get('screen');
const AccountScreen = () => {

  const SettingOptions = [
    {
      icon: 'shopping-bag',
      title: 'Orders'
    },
    {
      icon: 'credit-score',
      title: 'My Details'
    },
    {
      icon: 'location-on',
      title: 'Delivery Address'
    },
    {
      icon: 'credit-card',
      title: 'Payment Methods'
    },
    {
      icon: 'loyalty',
      title: 'Promo Cord'
    },
    {
      icon: 'notifications-none',
      title: 'Notifecations'
    },
    {
      icon: 'help-outline',
      title: 'Help'
    },
    {
      icon: 'report-gmailerrorred',
      title: 'About'
    }
  ]

  const RenderList = ({ item }) => {
    return (<View style={styles.itemView}>
      <View style={styles.iconTitleView}>
        <MaterialIcons
          name={item?.icon}
          size={30}
          color="#000"
        />
        <Text style={styles.titleText}>{item?.title}</Text>
      </View>
      <MaterialIcons
        name={'navigate-next'}
        size={30}
        color="#000"
      />
    </View>)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Image source={require('../assets/icon.png')} style={styles.profileImae} resizeMode={'contain'} />
        <View style={styles.detailView}>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>Afsar Hossen</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <MaterialIcons
                name="edit"
                size={18}
                color="#F26B6B"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.emailText}>Imshuvo97@gmail.com</Text>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={SettingOptions}
        renderItem={RenderList}
        scrollEnabled={false}
      />
      <TouchableOpacity style={styles.logoutBtn}>
        <MaterialIcons
          name={'logout'}
          size={30}
          color="#F26B6B"
        />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerView: {
    height: 100,
    width: width,
    flexDirection: 'row',
    paddingVertical: 25,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1
  },
  profileImae: {
    height: 64,
    width: 64,
    borderRadius: 32
  },
  detailView: {
    left: 40
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nameText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 18,
    fontWeight: '700',
    color: '#000'
  },
  emailText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '400',
    color: '#7C7C7C',
    marginTop: 5
  },
  itemView: {
    width: width * 0.9,
    paddingVertical: 18,
    borderBottomWidth: 1,
    alignSelf: 'center',
    borderBottomColor: '#E2E2E2',
    paddingHorizontal: 26,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconTitleView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Roboto',
    color: '#181725',
    left: 25
  },
  logoutBtn: {
    paddingVertical: 15,
    paddingHorizontal:30,
    backgroundColor: '#F2F3F2',
    borderRadius: 19,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
    flexDirection: 'row'
  },
  logoutText: {
    color: '#F26B6B',
    fontSize: 18,
    lineHeight: 18,
    fontFamily: 'Roboto',
    fontWeight: '600',
    textAlign: 'center',
    width: 220
  }
})