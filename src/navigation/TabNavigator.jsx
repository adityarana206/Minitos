import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './Profile.screen';
import CartScreen from './Cart.screen';
import FavoriteScreen from './Favorite.screen';
import AccountScreen from './Account.screen';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './Home.screen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Shop'
      component={HomeScreen}
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarStyle: {},
      }}
    >
      <Tab.Screen
        name="Shop"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="manage-search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="manage-search" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
