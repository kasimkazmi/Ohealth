import { Platform, Alert, ToastAndroid } from "react-native";
import { Dimensions, PixelRatio } from "react-native";
export var deviceHeight = Dimensions.get("window").height;
export var deviceWidth = Dimensions.get("window").width;
import AsyncStorage from "@react-native-async-storage/async-storage";
import { strings } from "./strings";

export const getPageLimit = () => {
  return 10;
};
export const showToast = (data) => {
  const { message } = data;
  if (Platform.OS === "android") {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0,
      200
    );
  } else {
    Toast.show(message, Toast.LONG);
  }
};
export const capitalLetter = (string) => {
  if (string != undefined) {
    let word = string.charAt(0).toUpperCase() + string.slice(1);
    return word;

  }
  else {
    return "Name"
  }
}
export const regName = (text) => {
  const reg = /^[A-Za-z]{2,20}$/;
  // console.log('text', text);
  if (reg.test(text) != true) {
    return true;
  }
  return false;
};
export const reguserName = (text) => {
  const reg = /^[a-zA-Z][a-zA-Z\d-_\.]+$/;
  // console.log('text', text);
  if (reg.test(text) != true) {
    return true;
  }
  return false;
};

export const regNamespace = (text) => {
  const reg = /^[A-Za-z]{3,25}$/;
  // console.log('text', text);
  if (reg.test(text) != true) {
    return true;
  }
  return false;
};
export const isFieldEmpty = (text) => {
  console.log("text", text);
  if (text == "") {
    return true;
  }
  return false;
};
export const passwordPattern = (password) => {
  const reg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (reg.test(password) != true) {
    return true;
  }
  return false;
};

export const isValidEmail = (email) => {
  var reg =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (reg.test(email) != true) {
    console.log("truevalidation");

    return true;
  }
  console.log("falsevalidation");
  return false;
};


export const isValidAdharNumber = (phoneNo) => {
  const reg = /^[0-9]+$/;
  if (reg.test(phoneNo) != true) {
    return true;
  }
  if (phoneNo && phoneNo.length < 14) {
    return false;
  }

  // if (phoneNo && phoneNo.length > 6 && phoneNo.length < 14) {
  //   return false;
  // }
  return true;
};


export const isValidComparedPassword = (newpassword, confirmPassword) => {
  if (newpassword != confirmPassword) {
    return true;
  }
  return false;
};
export const getOS = () => {
  if (Platform.OS === "ios") {
    return "ios";
  }
  return "android";
};

export const showAlertWithCallBack = (msg, onOkClick) => {
  Alert.alert(
    "",
    msg,
    [
      {
        text: strings("Ok"),
        onPress: () => {
          console.log(" CLICK CALLED ");
          onOkClick();
        },
      },
    ],
    {
      cancelable: false,
    }
  );
};

export const setInLocalStorge = async (key: String, token) => {
  try {
    const res = await AsyncStorage.setItem(key, JSON.stringify(token));
    console.log("setInLocalStorge", res);
  } catch (err) {
    console.log("setInLocalStorge Error", err);
  }
};

export const getFromLocalStorge = async (key: String) => {
  try {
    const token = await AsyncStorage.getItem(key);
    return token ? JSON.parse(token) : null;
  } catch (err) {
    console.log("getFromLocalStorge Error", err);
  }
};

export const removeAuthKey = async (key: String) => {
  try {
    let res = await AsyncStorage.removeItem(key);
  } catch (err) {
    console.log("removeToken Error", err);
  }
};
export const widthPercentageToDP = (widthPercent) => {
  const screenWidth = Dimensions.get("window").width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
export const heightPercentageToDP = (heightPercent) => {
  const screenHeight = Dimensions.get("window").height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};
export const AuthToken = async (key: String) => {
  try {
    const token = await AsyncStorage.getItem(key);
    return token ? JSON.parse(token) : null;
  } catch (err) {
    console.log("authToken Error", err);
  }
};
