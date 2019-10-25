import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import Page2 from '~/pages/Page2';
import Page3 from '~/pages/Page3';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Page2,
      Page3,
    },
    {
      defaultNavigationOptions: {
        headerTransparent: true,
        headerTintColor: '#FFF',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      },
    },
  ),
);

export default Routes;
