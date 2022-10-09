import * as React from "react";
import { Text } from "react-native";
import { fonts, fontScale } from "../constants";
import { Styles } from '../utiliy/ComponentStyles';
export const TextComponent = (props) => {
  return (
    <Text
      {...props}
      allowFontScaling={false}
      style={[Styles().text, props.style, { textTransform: "lowercase" }]}
      dangerouslySetInnerHTML={
        props?.dangerouslySetInnerHTML
          ? {
            __html: props.text,
          }
          : null
      }
    >
      {props?.dangerouslySetInnerHTML ? null : props.text}
    </Text>
  );
};
