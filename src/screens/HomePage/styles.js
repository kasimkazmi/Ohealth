import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  ohealthTextStyle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#F13D16',
  },
  loginButtonStyle: {
    backgroundColor: '#F13D16',
    width: '75%',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  SignUpButtonStyle:{
    backgroundColor: '#F13D16',
    width: '75%',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
  }
});
export default styles;
