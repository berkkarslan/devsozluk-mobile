import React from 'react';
import {
  createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import Dashboard from '../Screens/index'
import Profile from '../Screens/Profile/profile'

const LoggedInNavigator = createMaterialBottomTabNavigator({
  Homepage: {  
    navigationOptions:{
      tabBarIcon:<Icon  name="home" size={30}  color="#FFF"/>,
    },
    screen: Dashboard
  },
  Profile: {
    navigationOptions:{
      tabBarIcon:<Icon  name="user" size={30} color="#FFF"/>,
    },
    screen: Profile
  }
},
{
  tabBarOptions:{
    labelStyle:{padding:0,margin:0}
  },
  initialRouteName: 'Homepage',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#26ae61', padding:0,height:60, alignItems:'center' },
}


);
export default LoggedInNavigator