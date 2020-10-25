import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList161086Navigator from '../features/NotificationList161086/navigator';
import Settings161085Navigator from '../features/Settings161085/navigator';
import Settings161077Navigator from '../features/Settings161077/navigator';
import UserProfile161075Navigator from '../features/UserProfile161075/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList161086: { screen: NotificationList161086Navigator },
Settings161085: { screen: Settings161085Navigator },
Settings161077: { screen: Settings161077Navigator },
UserProfile161075: { screen: UserProfile161075Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
