import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
// import ImagePicker from 'react-native-image-crop-picker';
import { TextInputVal } from '../../components/TextInputVal';
import { UploadImageCom } from '../../components/UploadImageCom';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { images, strings } from '../../constants';
import * as Utility from '../../utiliy/index';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../utiliy/index';
import Entypo from "react-native-vector-icons/Entypo";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from 'react-redux';
import { useNetInfo } from '@react-native-community/netinfo';
import NetworkCon from '../../components/NetworkCon';
import { uploadImgApi } from '../../Redux/Services/authServices';
import mime from "mime";

const SignUp = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  const netInfo = useNetInfo();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("")
  const [error, setError] = useState(false);
  const [name, setname] = useState("");
  const [adhar, setadhar] = useState("");

  const [imageType, setImageType] = useState("");
  const [imageId, setImageId] = useState("");
  const [imageDocument, setImageDocument] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nationalIdImage, setnationalIdImage] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  const camera = () => {
    launchCamera(
      {
        mediaType: "mixed",
        includeBase64: false,
        maxHeight: 800,
        maxWidth: 800,
        quality: 0.8,
      },
      (response) => {
        if (response.assets) {
          if (imageType == "nationalId") {
            setImageId(response.assets[0]?.uri);
          } else {
            setImageDocument(response.assets[0]?.uri);
          }
          uploadImage(response.assets[0]);
          onCloseModal();
        }
      }
    );
  };

  const gallary = () => {
    launchImageLibrary(
      {
        mediaType: "mixed",
        includeBase64: false,
        maxHeight: 800,
        maxWidth: 800,
        quality: 0.8,
      },
      (response) => {
        if (response.assets) {
          if (imageType == "nationalId") {
            setnationalIdImage({
              nationalIdImage: res?.data,
            });
          } else {
            setImageDocument(response.assets[0]?.uri);
            uploadImage(response.assets[0]);
            onCloseModal();

          }
        }
      }
    );
  };

  const uploadImage = async (image) => {
    const data = new FormData();l
    const newImageUri = image.uri;
    data.append("aadhar-file", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop()
    },
    );
    data.append("fileName", "fileName"
    );
    console.log(data,"datadata===>");
    const res = await dispatch(uploadImgApi(data));

    console.log(res, "Image Respomce =>>>>");
    if (imageType == "nationalId") {
      setnationalIdImage({
        nationalIdImage: res?.data,
      });
    } else {
      // setnationalIdImage({
      //   ...userData,
      //   adharImage: res?.data,

    }
  };



  const SignupFunc = async () => {
    const validName = !Utility.reguserName(name);
    const validAdhar = !Utility.isValidAdharNumber(adhar);
    const validPassword = !Utility.passwordPattern(password);
    const validComparePassword = !Utility.isValidComparedPassword(
      password,
      confirmPassword
    );
    setError(true);
    if (
      !adhar.length ||
      !name.length ||
      !password.length ||
      !confirmPassword.length
    ) {
      Utility.showToast({
        message: "Please fill all the required field !",
      });
    } else if (name && !validName) {
      Utility.showToast({
        message: "Pleae check the Name name format.",
      });

    } else if (num && !validAdhar) {
      Utility.showToast({
        message: "Pleae check the Adhar number Details.",
      });
    } else if (password && !validPassword) {
      Utility.showToast({
        message: "Pleae check the Password formatPassword format.",
      });
    } else if (confirmPassword && !validComparePassword) {
      Utility.showToast({
        message: "Pleae check the Confirm Password format.",
      });
    } else {
      registerUser();
    }
    const registerUser = async () => {
      const body = {
        user_aadhar_number: adhar.trim(),
        // password: password,
        // confrimPassword: confirmPassword,
        fileName: fileName,
        // aadhar-file
      };
      const res = await dispatch(uploadImgApi(body));
      console.log(res, "Respomnceee=>>>");
      if (res?.statusCode == 200) {
        openModal();
      }
    };
  };
  if (netInfo?.isConnected || netInfo?.isConnected == null) {

    return (
      <SafeAreaView style={styles.mainContainer}>
        <Loader loading={isLoading} />

        <ScrollView style={styles.mainContainer}>
          <UploadImageCom
            modalVisible={modalVisible}
            opencamera={() => camera()}
            opengallery={() => gallary()}
            onCloseModal={() => onCloseModal()}
            onCancel={() => onCloseModal()}
          />


          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ height: scale(140), width: scale(140) }}
              source={require('../../../src/assets/Ohealth.jpg')}
            />
            {/* 
          <Modal
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    backgroundColor: '#E5E8E8',
                    width: '100%',
                    alignItems: 'center',
                    height: scale(35),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{ color: '#E5E8E8' }}>lllllooo</Text>
                  <Text style={styles.modalText}>INSTRUCTION </Text>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text
                      style={{
                        fontSize: scale(15),
                        marginRight: moderateScale(3),
                        fontWeight: '500',
                      }}>
                      X
                    </Text>
                  </Pressable>
                </View>

                <Image
                  style={{
                    flex: 0.99,
                    marginTop: verticalScale(5),
                    width: '90%',
                    alignItems: 'center',
                  }}
                  source={require('../../../src/assets/adharCard.jpeg')}
                />
                <View
                  style={{
                    marginRight: moderateScale(20),
                    marginTop: verticalScale(10),
                  }}>
                  <Text style={{ fontSize: moderateScale(14), color: '#212F3C' }}>
                    Upload a full Aadhar image in
                  </Text>
                  <Text style={{ fontSize: moderateScale(14), color: '#212F3C' }}>
                    the proper format like above
                  </Text>
                  <Text style={{ fontSize: moderateScale(14), color: '#212F3C' }}>
                    image(.png, .jpg,.jpeg)
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#F13D16',
                    height: verticalScale(40),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: moderateScale(5),
                    marginTop: verticalScale(20),
                    width: '70%',
                  }}>
                  <Text style={{ color: '#FFFFFF', fontWeight: '800' }}>
                    CONTINUE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal> */}

            {/* <Text style={styles.welcomeBack}>{strings("createAC")}</Text> */}

            <View>
              {imageDocument ? (
                <View
                  style={{
                    marginHorizontal: wp("10%"),
                    marginBottom: hp("2%"),
                  }}
                >
                  <Image
                    source={{ uri: imageDocument }}
                    style={{ height: hp("40%"), width: hp("40%") }}
                    resizeMode="contain"
                    position="relative"
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setImageDocument("");
                      setImageDocument({ adharImage: "" });
                    }}
                    style={{ position: "absolute", right: "8%", top: -20 }}
                  >
                    <Entypo
                      name={"circle-with-cross"}
                      size={40}
                      color={"black"}
                    />
                  </TouchableOpacity>
                </View>
              ) :
                null
                // <View style={{ height: hp("30%"), width: wp("50%"), alignItems: "center", justifyContent: "center" }}>

                //   <Image source={images.adharCard}
                //     // resizeMode="contain"
                //     style={{ height: hp("20"), width: wp("10") }}
                //   />

                // </View>
              }
            </View>
            <TouchableOpacity
              onPress={() => openModal()}
              style={styles.loginButtonStyle}>
              <Text style={styles.LoginButtontextStyle}>
                {strings("clickAdhar")}
              </Text>
            </TouchableOpacity>
            <TextInputVal
              type="phone"
              editable={false}
              placeholder="Adhar Number"
              onChangeText={(adhar) => setadhar(adhar)}
              error={Utility.isValidAdharNumber(adhar)}
              required={!adhar && error}
            />
            <TextInputVal
              type="text"
              editable={false}
              placeholder="Name"
              onChangeText={(name) => setname(name)}
              // error={Utility.reguserName(name)}
              // required={!name && error}
              value={name}
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

            <TextInputVal
              type="confirmPassword"
              placeholder="confirmPassword"
              icon
              onChangeText={(pass) => setConfirmPassword(pass)}
              error={Utility.isValidComparedPassword(
                password,
                confirmPassword
              )}
              required={!confirmPassword && error}
              value={confirmPassword}
            />
            <TouchableOpacity style={styles.loginButtonStyle}
              onPress={() => SignupFunc()}>
              <Text style={styles.LoginButtontextStyle}>{strings("signup")}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', paddingBottom: verticalScale(20) }}>
              <Text style={{ color: '#17202A' }}>{strings("loginAcc")}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{ marginLeft: moderateScale(5) }}>
                <Text style={styles.signuptextstyle}>{strings("login")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

      </SafeAreaView>
    )
  } else {
    return <NetworkCon />;
  }
}

export default SignUp;
