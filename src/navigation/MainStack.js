import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';

import HomePage from '../screens/HomePage/HomePage';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';
const Stack = createNativeStackNavigator();
function MainStack() {
  return (
    <NavigationContainer  >
      <Stack.Navigator
        in
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;