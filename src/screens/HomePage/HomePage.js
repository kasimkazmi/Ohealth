import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { moderateScale, scale } from 'react-native-size-matters';
import styles from './styles';
import { useNetInfo } from '@react-native-community/netinfo';
import { changeLanguage, strings } from '../../constants';
import NetworkCon from '../../components/NetworkCon';
const HomePage = ({ navigation }) => {
  const netInfo = useNetInfo();
  function onChangeLanguage() {
    console.warn('LANGUAGE CHANGED');
    changeLanguage();
  }
  if (netInfo?.isConnected || netInfo?.isConnected == null) {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Image
            style={{ height: scale(140), width: scale(140) }}
            source={require('../../../src/assets/Ohealth.jpg')}
          />
          <Text style={styles.ohealthTextStyle}>{strings("loginTitle")}</Text>
          <View style={{ marginHorizontal: "12%", }}>
            <Text style={{ marginTop: 5, textAlign: "center", color: '#17202A' }}>
              {strings("loginSubTitle")}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.loginButtonStyle}>
            <Text style={{ color: '#FFFFFF', fontSize: 17, fontWeight: '600' }}>
              {strings("login")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={
              styles.SignUpButtonStyle
            }>
            <Text style={{ color: '#FFFFFF', fontSize: 17, fontWeight: '600' }}>
              {strings("signup")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onChangeLanguage()}>
            <Text
              style={{
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              English / Hindi
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )

  } else {
    return <NetworkCon />;
  }
}

export default HomePage;
