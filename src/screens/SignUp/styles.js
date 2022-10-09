import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  welcomeBack: {
    fontWeight: '800',
    fontSize: scale(17),
    color: '#F13D16',
  },
  textinput: {
    marginTop: verticalScale(17),
    borderWidth: 0.8,
    height: verticalScale(44),
    margin: verticalScale(10),
    width: '80%',
    padding: moderateScale(8),
  },
  forgotPasswordstyle: {
    fontWeight: '700',
    color: '#F13D16',
  },
  LoginButtontextStyle: {
    fontSize: moderateScale(15),
    fontWeight: '700',
    color: '#FFFFFF',
  },
  loginButtonStyle: {
    marginTop: verticalScale(20),
    backgroundColor: '#F13D16',
    width: '80%',
    height: scale(45),
    alignItems: 'center',
    justifyContent: 'center',
        marginBottom: 20,

  },
  signuptextstyle: {
    color: '#F13D16',
    fontWeight: '700'
  }, modalView: {
    margin: verticalScale(12),
    backgroundColor: "#FFFFFF",
    flex: 1,
    borderRadius: scale(10),
    alignItems: 'center',

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {


    fontSize: scale(16),
    fontWeight: '600'
  },
  centeredView: {
    flex: 1,

    marginTop: moderateScale(10)

  }
});



export default styles;
