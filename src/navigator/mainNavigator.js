import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import AddItemBlueprintNavigator from '../features/AddItemBlueprint/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';
import BlankBlueprintNavigator from '../features/BlankBlueprint/navigator';
import BlankScreen213763Navigator from '../features/BlankScreen213763/navigator';
import BlankScreen113753Navigator from '../features/BlankScreen113753/navigator';
import BlankScreen013746Navigator from '../features/BlankScreen013746/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
AddItemBlueprint: { screen: AddItemBlueprintNavigator },
EmailAuth: { screen: EmailAuthNavigator },
BlankBlueprint: { screen: BlankBlueprintNavigator },
BlankScreen213763: { screen: BlankScreen213763Navigator },
BlankScreen113753: { screen: BlankScreen113753Navigator },
BlankScreen013746: { screen: BlankScreen013746Navigator },

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
