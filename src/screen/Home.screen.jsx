import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from './Cart.screen';
import FavoriteScreen from './Favorite.screen';
import AccountScreen from './Account.screen';
import ProfileScreen from './Profile.screen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (

    
    <Tab.Navigator>
      <Tab.Screen name="Shop" component={ProfileScreen} />
      <Tab.Screen name="Explore" component={ProfileScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
