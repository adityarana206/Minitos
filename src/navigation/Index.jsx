import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screen/landingscreen.screen';
import OnboardingScreen from '../screen/Onboarding.screen';
import Signinscreen from '../screen/Signin.screen';
import OTPScreen from '../screen/Otp.screen';
import SelectLocation from '../screen/SelectLocation.screen';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LandingScreen'>
          <Stack.Screen
            name='LandingScreen'
            options={{
              gestureEnabled: false,
              headerShown: false,
            }}
            component={LandingScreen}
          />
          <Stack.Screen
            name="OnboardingScreen"
            options={{
              gestureEnabled: false,
              headerShown: false,
            }}
            component={OnboardingScreen}
          />
          <Stack.Screen
            name="Signinscreen"
            options={{
              gestureEnabled: false,
              headerShown: false,
            }}
            component={Signinscreen}
          />
          <Stack.Screen
            name="OTPScreen"
            options={{
              gestureEnabled: false,
              headerShown: false,
            }}
            component={OTPScreen}
          />
           <Stack.Screen
            name="SelectLocation"
            options={{
              gestureEnabled: false,
              headerShown: false,
            }}
            component={SelectLocation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
