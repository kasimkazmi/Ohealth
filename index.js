/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import configureStore from "./src/Redux/configureStore";

import { name as appName } from './app.json';
import { Provider } from 'react-redux';
const store = configureStore();
const newApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};
AppRegistry.registerComponent(appName, () => newApp);
