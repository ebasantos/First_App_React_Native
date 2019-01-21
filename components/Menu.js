import React from 'react';
import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';

import Welcome from './Welcome'
import Suport from './Suport'

export default createDrawerNavigator({
    Welcome:{
        screen : () => <Welcome/>  
    },

    Suport:{
        screen : () => <Suport/>   
    }

}, {drawerWidth : 300})