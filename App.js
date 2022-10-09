import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import HomePage from './src/screens/HomePage/HomePage'
import Login from './src/screens/Login/Login'
import MainStack from './src/navigation/MainStack'
import { Provider } from 'react-redux'
import configureStore from './src/Redux/configureStore';
import SplashScreen from "react-native-splash-screen";
const store = configureStore();

const App = () => {
  //Hide Splash screen on app load.
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <>
      <React.Fragment>

        {/* // <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}> */}
        <MainStack />

      </React.Fragment>
    </>


    // </View>
  )
}

export default App