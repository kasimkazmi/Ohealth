import {
  View,

  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
import React, { useState, useRef } from "react";
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { colors, fonts, images } from "../constants";
import { heightPercentageToDP as hp } from "../utiliy/index";

import { TextComponent } from "./TextComponent";

export const UploadImageCom = (props) => {

  return (
    <View>
      <Modal
        backdropOpacity={0.2}
        onBackdropPress={() => props.onCloseModal()}
        isVisible={props.modalVisible}
      >
        <View style={innerstyles.modal}>
          <View style={innerstyles.modalMainView}>
            <TouchableOpacity
              onPress={props.opencamera}
              style={innerstyles.modalTouchFiledView}
            >
              <Image
                style={innerstyles.modalTouchField}
                source={images.camera}
              />
              <View style={{}}>
                <TextComponent
                  style={{
                    color: colors.Black,
                    left: 11,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                  text={"Camera"}
                />
                <TextComponent
                  style={{
                    color: "#7A869A",
                    left: 11,
                    fontSize: 12,
                  }}
                  text={"open camera to capture image"}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={props.opengallery}
              style={innerstyles.modalTouchFiledView}
            >
              <Image
                style={innerstyles.modalTouchField}
                source={images.gallaryIcon}
              />
              <View style={{}}>
                <TextComponent
                  style={{
                    color: colors.Black,
                    left: 11,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                  text={"Photos"}
                />
                <TextComponent
                  style={{
                    color: "#7A869A",
                    left: 11,
                    fontSize: 12,
                  }}
                  text={"browse images from gallery"}
                />
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={innerstyles.cancelView}
            onPress={props.onCancel} >
            <TextComponent
              text={"Cancel"}
              style={{
                // backgroundColor: "pink",
                textAlign: "center",
                color: colors.textColor,
                fontFamily: fonts.Poppins_Medium,
                fontSize: 16,
              }}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const innerstyles = StyleSheet.create({
  modalMainView: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
  },

  modal: {
    marginTop: hp("60%"),
  },
  modalTouchField: {
    height: hp("5%"),
    width: hp("5%"),
  },
  textItem: {
    color: colors.Black,
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
