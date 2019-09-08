import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Screens/login.js';
import Register from '../Screens/register.js';

const LoggedOutNavigator = createStackNavigator({
  Register: {
    screen: Register, 
    navigationOptions: {
      title: 'Register',
      header: null //this will hide the header
    },
  },
  Login: {
    screen: Login, 
    navigationOptions: {
      title: 'Login',
      header:null
    },
  },
  
},
{
  initialRouteName:'Login'
}
);

export default LoggedOutNavigator