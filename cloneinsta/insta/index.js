/** @format */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import { name as appName } from './app.json';
import Navigator from './src/Navigator'
import storeConfig from './src/store/storeConfig'
import axios from 'axios'

axios.defaults.baseURL = 'https://clone-instagram-83d1e.firebaseio.com/'

const store = storeConfig() 
const Redux = () => {
    <Provider store={store}>
        <Navigator />
          </Provider>
}

AppRegistry.registerComponent(appName, () => Redux);
