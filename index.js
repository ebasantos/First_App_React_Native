import React from 'react';
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import Menu from './components/Menu'

AppRegistry.registerComponent(appName, () => Menu);