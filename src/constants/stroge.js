import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageKey = {
  AUTH_TOKEN: '@AUTH_TOKEN',
  USERDATA: '@USERDATA',
  STEP: '@STEP',
  STATUS: '@STATUS',
  LANGUAGE: '@LANGUAGE',

};

export async function storeData(key, value) {
  await AsyncStorage.setItem(key, value);
}

export async function getData(key) {
  return await AsyncStorage.getItem(key).then(value => {
    return value;
  });
}

export async function clearData() {
  const keys = [storageKey.AUTH_TOKEN];
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    // remove error
  }
}
