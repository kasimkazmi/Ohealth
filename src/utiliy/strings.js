import I18n from 'react-native-i18n';
import en from '../languages/en';
import hi from '../languages/hi';
import RNRestart from 'react-native-restart';
import { storageKey, storeData } from '../constants';

export function strings(stringName) {
  return I18n.t(stringName);
}

// export function changeLanguage() {
//   if (I18n.currentLocale().startsWith('sp')) {
//     storeData(storageKey.LANGUAGE, 'en');
//     RNRestart.Restart();
//   } else {
//     storeData(storageKey.LANGUAGE, 'sp');
//     RNRestart.Restart();
//   }
// }
export function changeLanguage(val) {
  alert(I18n.currentLocale());
  if (I18n.currentLocale().startsWith('hi')) {
    if (val == 'en') {
      storeData(storageKey.LANGUAGE, 'en');
      RNRestart.Restart();
    }
  } else {
    if (val == 'hi') {
      storeData(storageKey.LANGUAGE, 'hi');
      RNRestart.Restart();
    }
  }
}


export function getLanguage() {
  return I18n.currentLocale() + '';
}

console.log('LANGUAGE IS THIS', I18n.currentLocale() + '');

I18n.locale = I18n.currentLocale() + '';

I18n.translations = {
  'en-US': en,
  en: en,
  hi,
};

I18n.fallbacks = true;
