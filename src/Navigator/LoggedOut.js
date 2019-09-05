import { createStackNavigator } from 'react-navigation'

import Login from '../Screens/login'

const LoggedOutNavigator = createStackNavigator({
  Login: {
    screen: Login, 
    navigationOptions: {
      title: 'Login',
      header: null //this will hide the header
    },
  }
});

export default LoggedOutNavigator