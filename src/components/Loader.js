import React, { Component, useContext } from 'react';
import { colors, images, fonts } from '../constants';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';
const Loader = props => {
  const isLoadingAuth = useSelector((state) => state.authReducer.isLoading);

  return (
    <View
      style={[
        styles.loader,
        { backgroundColor: props.loading ? "white" : null },
      ]}>
      {props.loading && (
        <ActivityIndicator
          size="large"
          color={"blue"}
          style={{ zIndex: 1 }}
        />
      )}
    </View>
  );
};
export default Loader;
const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: '50%',
    left: '42%',
    zIndex: 10,
    backgroundColor: '#E6E6E6',
    padding: 10,
    borderRadius: 10,
    opacity: 0.5,
  },
});
