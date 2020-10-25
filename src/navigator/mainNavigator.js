import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item161174Navigator from '../features/Add-Item161174/navigator';
import Maps161170Navigator from '../features/Maps161170/navigator';
import UserProfile161166Navigator from '../features/UserProfile161166/navigator';
import Settings161129Navigator from '../features/Settings161129/navigator';
import UserProfile161115Navigator from '../features/UserProfile161115/navigator';
import Tutorial161114Navigator from '../features/Tutorial161114/navigator';
import NotificationList161086Navigator from '../features/NotificationList161086/navigator';
import Settings161085Navigator from '../features/Settings161085/navigator';
import Settings161077Navigator from '../features/Settings161077/navigator';
import UserProfile161075Navigator from '../features/UserProfile161075/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item161174: { screen: Add-Item161174Navigator },
Maps161170: { screen: Maps161170Navigator },
UserProfile161166: { screen: UserProfile161166Navigator },
Settings161129: { screen: Settings161129Navigator },
UserProfile161115: { screen: UserProfile161115Navigator },
Tutorial161114: { screen: Tutorial161114Navigator },
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
