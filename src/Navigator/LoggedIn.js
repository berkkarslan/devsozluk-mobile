import { createBottomTabNavigator } from 'react-navigation'

import Dashboard from '../Screens/index'
import Profile from '../Screens/Profile/profile'

const LoggedInNavigator = createBottomTabNavigator({
  Homepage: {
    screen: Dashboard
  },
  Profile: {
    screen: Profile
  }
});

export default LoggedInNavigator