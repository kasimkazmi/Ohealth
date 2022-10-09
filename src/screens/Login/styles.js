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
    paddingBottom: 20,
  },
  textinput: {
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
  },
  signuptextstyle: {
    color: '#F13D16',
    fontWeight: '700'
  }
});
export default styles;
