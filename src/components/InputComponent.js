import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  Platform,
} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import { images } from "../constants";
import { moderateScale, verticalScale } from "react-native-size-matters";
// import styles from "../container/auth/styles";
// 
// import { colors, images } from "../constants";
images

export const InputComponent = (props) => {
  const { placeholder, placeholderTextColor, showIcon, secuirtyTextEntry } =
    props;
  const [textEntry, setTextEntry] = useState(secuirtyTextEntry);
  const [onClick, setonClick] = useState(false);
  return (
    <View
      style={{
        backgroundColor: "#F8F8F8",
        borderWidth: onClick ? 0.3 : 0.3,
        borderColor:
          (props.error && props.value) || props.required
            ? "red"
            : "white",
        marginHorizontal: 17,
        // marginVertical: 8,
        paddingHorizontal: 20,
        // borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: Platform.OS == "ios" ? 17 : null,
        justifyContent: "space-between",

        // // borderWidth: 0.8,
        // height: verticalScale(44),
        // margin: verticalScale(10),
        // width: '100%',
        // padding: moderateScale(8),



      }}
    >
      <TextInput
        {...props}
        allowFontScaling={false}
        onFocus={() => setonClick(true)}
        onBlur={() => setonClick(false)}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[props.style, { flex: 1 }]}
        editable={props?.editable}
        value={props?.value}
      ></TextInput>
      {showIcon ? (
        <Pressable
          onPress={() => {
            setTextEntry((currentValue) => !currentValue);
          }}
        >
          <Image style={{}} source={images.passwordEye}></Image>
        </Pressable>
      ) : null}
    </View>
  );
};
