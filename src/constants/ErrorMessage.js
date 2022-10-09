import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, sizes } from '.';
import { TextComponent } from '../components/TextComponent';

export const ErrorMessage = props => {
  return (
    <View
      style={{
        marginHorizontal: 17,
        marginVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 12,
      }}>
      {props.error && props.value ? (
        <TextComponent style={styles.errorMessage} text={props.message} />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontSize: 12,
    fontWeight: '400',
  },
});
