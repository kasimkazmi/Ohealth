import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './styles'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { TextInputVal } from '../../components/TextInputVal';
import { strings } from '../../constants';
import * as Utility from '../../utiliy/index';

const ForgotPassword = ({ navigation }) => {
  const [phone, setphone] = useState(false)

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ height: scale(140), width: scale(140) }} source={require('../../../src/assets/Ohealth.jpg')} />
        <Text style={styles.welcomeBack}>{strings("restorePass")}</Text>
        <TextInputVal
          type="phone"
          placeholder="Enter Phone Number"
          icon
          onChangeText={(phone) => setphone(phone)}
        // error={Utility.passwordPattern(password)}
        // required={!password && error} r
        />
        <Text style={{ marginRight: moderateScale(15), fontSize: scale(12.5), color: '#17202A' }}>{strings("forgotSubtitle")}</Text>
        <TouchableOpacity
          style={styles.loginButtonStyle}>
          <Text style={styles.LoginButtontextStyle}>{strings("sendIns")}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
