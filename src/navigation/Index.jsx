import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingScreen from '../screen/landingscreen.screen';
import OnboardingScreen from '../screen/Onboarding.screen';
import Signinscreen from '../screen/Signin.screen';
import OTPScreen from '../screen/Otp.screen';
import SelectLocation from '../screen/SelectLocation.screen';
import HomeScreen from '../screen/Home.screen';
import TabNavigator from './TabNavigator';
import CartScreen from '../screen/Cart.screen';
const Stack = createNativeStackNavigator();

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingScreen">
          <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={screenOptions}
          />
          <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={screenOptions}
          />
          <Stack.Screen
            name="Signinscreen"
            component={Signinscreen}
            options={screenOptions}
          />
          <Stack.Screen
            name="OTPScreen"
            component={OTPScreen}
            options={screenOptions}
          />
          <Stack.Screen
            name="SelectLocation"
            component={SelectLocation}
            options={screenOptions}
          />
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={screenOptions}
          />
          <Stack.Screen name="CartScreen" component={CartScreen}  />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
