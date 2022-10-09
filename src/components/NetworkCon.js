import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Image, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../utiliy/index';
import { TextComponent } from './TextComponent';
import { Provider } from 'react-redux';
import configureStore from '../Redux/configureStore';
const NetworkCon = ({ navigation }) => {
  const store = configureStore();

  return (
    <>
      <Provider store={store}>
        <SafeAreaView
          style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center' }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: wp('40%'), height: hp('30%') }}
              resizeMode="contain"
              source={require('../assets/nointernet.gif')}
            />
            <TextComponent
              style={{ color: "black", textAlign: 'center', fontSize: 16 }}
              children="NO INTERNET CONNECTION"
            />
          </View>
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default NetworkCon;

const styles = StyleSheet.create({
  centerSubHeading: {
    width: wp('70%'),
  },
  centerAlign: {
    alignSelf: 'center',
  },
});
