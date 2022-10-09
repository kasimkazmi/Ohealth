import { Dimensions, StyleSheet } from 'react-native';
const window = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../utiliy/index';
import { fonts, fontScale } from '../constants/fonts';
import { colors } from '../constants';
// import {useContext} from 'react';
// import {MyContext} from '../../App';
// import {colors, sizes} from '../constants';

export const Styles = () => {
  const Background = colors.backgroundClr;

  const Themecolor = colors.blue;
  const Elementscolor = colors.black;
  const lighttheme = 'skyblue';
  const buttoncolor = 'red';
  const headingcolor = 'black';
  const themetextcolor = 'black';
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Background,
    },
    splashcontainer: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
    },
    Themecolors: {
      color: Themecolor,
    },
    subContainer: {
      // padding: sizes.xl,
    },
    heading: {
      // fontWeight: "bold",
      fontFamily: fonts.Product_Sans_Bold,
      color: headingcolor,
      fontSize: fontScale(25),
    },
    innerheading: {
      // fontWeight: "bold",
      fontFamily: fonts.Product_Sans_Regular,
      color: headingcolor,
      fontSize: fontScale(30),
    },
    btnview: {
      width: wp('85%'),
      backgroundColor: buttoncolor,
      alignItems: 'center',

      borderRadius: 5,
      height: hp('6%'),
      marginTop: hp('2%'),
    },
    btnviewBlur: {
      width: wp('85%'),
      backgroundColor: colors.lighterGrey,
      alignItems: 'center',
      borderRadius: 5,
      height: hp('6%'),
      marginTop: hp('2%'),
    },
    btnviewblank: {
      width: wp('85%'),
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: 'grey',
      borderRadius: 5,
      height: hp('6%'),
      justifyContent: 'center',
      marginTop: hp('2%'),
    },
    btnviewenable: {
      width: wp('85%'),
      backgroundColor: Themecolor,

      borderWidth: 0.5,
      borderColor: 'grey',
      borderRadius: 5,
      height: hp('6%'),
      marginTop: hp('2%'),
    },
    btnwidth: {
      flexDirection: 'row',
      height: hp('6%'),
      width: wp('85%'),
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconfb: {
      width: wp('10%'),
      height: hp('3%'),
    },
    btntext: {
      color: themetextcolor,
      fontFamily: fonts.Poppins_Medium,
      fontSize: fontScale(14),
      textAlign: 'center',
    },
    blankbtntext: {
      color: Elementscolor,
      fontFamily: fonts.Poppins_Medium,
      fontSize: fontScale(14),
      textAlign: 'center',
    },
    text: {
      fontFamily: fonts.Poppins_Medium,
      color: Elementscolor,
      fontSize: fontScale(14),
    },
    Subheading: {
      fontFamily: fonts.Poppins_Medium,
      color: Elementscolor,
      fontSize: fontScale(16),
      //   marginTop: hp('1%')
    },
    backbtncolor: {
      tintColor: Elementscolor,
    },
    backbtn: {
      color: Elementscolor,
    },
    NoOfnotification: {
      color: colors.white,
      // fontSize: sizes.ss,
    },
    notificationbg: {
      alignSelf: 'center',
      width: 25,
      height: 25,
      backgroundColor: Themecolor,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },

  });
};
