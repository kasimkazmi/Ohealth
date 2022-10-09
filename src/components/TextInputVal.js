import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Platform,
  Alert,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../utiliy/index";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors, } from "../constants";
import { InputComponent } from "./InputComponent";
import { ErrorMessage } from "../constants/ErrorMessage";

import {
  check,
  openSettings,
  PERMISSIONS,
  RESULTS,
  request
} from "react-native-permissions";

export const TextInputVal = ({ ...props }) => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText(props.address);
  }, [props.address]);

  const requestCameraPermission = async () => {
    if (Platform.OS == "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "App Camera Permission",
            message: "App needs access to your camera ",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Camera permission given");
          // await dispatch(getLocData());
        } else {
          console.log("Camera permission denied");
        }
      } catch (err) {
        console.log(err);
      }
    } else if (Platform.OS == "ios") {
      const permissions = PERMISSIONS.IOS.CAMERA;
      // [Platform.OS];
      if (!permissions) {
        return true;
      }
      try {
        const result = await check(permissions);
        // console.log("Permission_=>>,, checkPermission, result :", result);
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              "This feature is not available (on this device / in this context)"
            );
            break;
          case RESULTS.GRANTED:
            console.log("The permission is granted");

            break;
          case RESULTS.BLOCKED:
            Alert.alert(
              "App Camera Permission",
              "App needs access to your camera!",
              [
                {
                  text: "Cancel",
                  // onPress: () => setImageModalVisible(false),
                  style: "cancel",
                },
                { text: "OK", onPress: () => openSettings() },
              ]
            );

            break;
          case RESULTS.DENIED:
            try {
              const result = await request(permissions);
              return result === RESULTS.GRANTED;
            } catch (error) {
              console.log("Permission_,, requestPermission, error :", error);
              return false;
            }

            break;
          default:
            break;
        }
        return true;
      } catch (error) {
        console.log("Permission_=>>,, checkPermission, error :", error);
        return false;
      }
    } else return true;
  };

  const removeInput = () => {
    ref.current?.setAddressText("");
    props.setAddress("");
  };
  let arr = [];
  const selectItem = (index) => {
    if (props.value.includes(index)) {
      arr = props.value.filter((item) => item !== index);
    } else {
      arr.push(...props.value, index);
    }
    props.setOption(arr);
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const removeTag = (eachTag) => {
    let tagArr = [];
    tagArr = props.value.filter((item) => item != eachTag);
    props.setOption(tagArr);
  };

  return (
    <View style={styles.inputContainer}>
      {props.type === "phone" ? (
        <View>
          <InputComponent {...props} maxLength={16} keyboardType={"numeric"} />
          <ErrorMessage
            {...props}
            message={"Please enter valid Adhar number."}
          />
        </View>
      ) : props.type === "text" ? (
        <View>
          <InputComponent {...props} />
          <ErrorMessage {...props} message={"Please enter valid input."} />
        </View>
      ) : props.type === "withIcon" ? (
        <View>
          <View style={{ flexDirection: "row" }}>
            <View pointerEvents="none" style={{ width: "100%" }}>
              <InputComponent {...props} />
            </View>
            {props.icon ? (
              <View
                style={{ justifyContent: "center", }}
              >
                <TouchableOpacity
                  onPress={() => setIsVisible(!isVisible)}
                  style={{
                    position: "absolute",
                    right: 25,
                  }}
                >
                  <Image style={styles.icon} source={props.icon} />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <ErrorMessage {...props} message={"Please enter valid input."} />
        </View>
      ) : props.type === "email" ? (
        <View>
          <InputComponent {...props} autoCapitalize="none" />
          <ErrorMessage {...props} message={"Please enter valid email."} />
        </View>
      ) : props.type === "password" ? (
        <View>
          <View style={{ flexDirection: "row", }}>
            <View style={{ width: "100%" }}>
              <InputComponent {...props} secureTextEntry={isVisible}
                maxLength={12}
              />
            </View>
            {props.icon ? (
              <View
                style={{ justifyContent: "center", }}
              >
                <TouchableOpacity
                  onPress={() => setIsVisible(!isVisible)}
                  style={{
                    position: "absolute",
                    right: 30,
                  }}
                >
                  <Ionicons
                    name={!isVisible ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color="#A5A5A5"
                  />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <ErrorMessage
            {...props}
            message={
              "Password should be 8 character long, must contain at least one uppercase letter, one lowercase letter, one number and one special character."
            }
          />
        </View>
      ) : props.type === "confirmPassword" ? (
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "100%" }}>
              <InputComponent {...props} secureTextEntry={isVisible} maxLength={14} />
            </View>
            {props.icon ? (
              <View
                style={{ justifyContent: "center", }}
              >
                <TouchableOpacity
                  onPress={() => setIsVisible(!isVisible)}
                  style={{
                    position: "absolute",
                    right: 25,
                  }}
                >
                  <Ionicons
                    name={!isVisible ? "eye-outline" : "eye-off-outline"}
                    size={20} r
                    color="#A5A5A5"
                  />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <ErrorMessage {...props} message={"Both password should match."} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: wp("98%"),
  },
  inputBox: {
    borderWidth: 0,
  },
  innerView: {
    alignItems: "center",
  },
  row: { flexDirection: "row" },
  subText: {
    fontSize: 14,
    color: colors.textColor,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  boxImage: {
    height: 60,
    width: 55,
    backgroundColor: "#F8F8F8",
    margin: 4,
    // borderWidth:2,
    borderRadius: 10,
  },
  addImage: {
    height: 67,
    width: 55,
    left: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  skipText: {
    color: "#1DA7E0",
    fontSize: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  uri: {
    paddingHorizontal: 10,
  },
  modalItemTouch: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  documentView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  dropItems: {
    width: wp("25%"),
    margin: 5,
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textItem: {
    color: colors.white_Colors,
    // textAlign: 'center',
  },
  modal: {
    backgroundColor: colors.white,
    // padding: sizes.xxl,
    borderRadius: 14,
    borderColor: "#F2f2f2",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: "flex-end",
  },

  modalMainView: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 14,
    paddingVertical: 20,
  },
  submitBtn: {
    backgroundColor: colors?.gold,
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "70%",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  modal: {
    marginTop: hp("65%"),
  },
  modalTouchField: {
    height: hp("4%"),
    width: hp("4%"),
  },
  icon: {
    height: hp("2.5%"),
    width: hp("2.5%"),
  },
  textItem: {
    color: colors.textColor,
    fontSize: 14,
  },
  modalTouchFiledView: {
    flexDirection: "row",
    paddingTop: 11,
    paddingBottom: 11,
  },
  cancelView: {
    height: 45,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});
