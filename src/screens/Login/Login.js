import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  BackHandler,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { TextInputVal } from '../../components/TextInputVal';
import * as Utility from '../../utiliy/index';
import { changeLanguage, strings } from '../../constants';
import { loginApi, forgotApi } from '../../Redux/Services/authServices';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  // const userSignin = useSelector(state => state.userSignin);
  // const getLoc = useSelector(state => state.getLoc);
  // const social = useSelector(state => state.social);
  // const getBanner = useSelector(state => state.getBanner);
  // const {loading} = userSignin;


  const [password, setPassword] = useState(false)
  const [error, setError] = useState(false);
  const [adhar, setadhar] = useState("");

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert("", "Are you sure you want to exit the app?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "YES", onPress: () => BackHandler.exitApp() },
        ]);
      } else {
        navigation.goBack();
      }
      return true;
    }
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };

  }, [])

  //--------apiintegration----------
  const validAdhar = Utility.isValidAdharNumber(adhar);
  const validPassword = !Utility.passwordPattern(password);

  const Signinfunc = async () => {
    setError(true);
    var body = {};

    if (!adhar.length) {

      Utility.showToast({
        message: "These are required fields.",
      });

    } else if (!password.length) {
      Utility.showToast({
        message: "Please enter your password !",
      });
    } else {
      if (validAdhar) {
        Utility.showToast({
          message: "Please enter valid Valid Adhar number !",
        });
      } else {
        body = {
          user_aadhar_number: adhar,
          user_password: password

        };
      }
      const res = await dispatch(loginApi(body));
      console.log(res, "res.data?.profileStatus ");
      if (res == 200) {
        navigation.navigate("SignUp");

      }
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ height: scale(140), width: scale(140) }}
          source={require('../../../src/assets/Ohealth.jpg')}
        /><Text style={styles.welcomeBack}>
          {strings("welcom")}
        </Text>
        <TextInputVal
          type="phone"
          placeholder="Adhar Number"
          onChangeText={(adhar) => setadhar(adhar)}
          error={Utility.isValidAdharNumber(adhar)}
          required={!adhar && error}
        />
        <TextInputVal
          type="password"
          placeholder="Password"
          icon
          onChangeText={(pass) => setPassword(pass)}
          error={Utility.passwordPattern(password)}
          required={!password && error}
          value={password}

        />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text style={{ color: '#FFFFFF' }}>
            fffffffffffffffffffdddrrfffffffffffr
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordstyle}>
              {strings("forgetTitle")}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButtonStyle}
          onPress={() =>
            Signinfunc()}
        >
          <Text style={styles.LoginButtontextStyle}>{strings("login")}</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: verticalScale(10) }}>
          <Text style={{ color: '#17202A' }}>{strings("noLoginAccount")}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{ marginLeft: moderateScale(5) }}>
            <Text style={styles.signuptextstyle}>{strings("signup")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
