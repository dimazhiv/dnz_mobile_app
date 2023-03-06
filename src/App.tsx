import React, { Component } from 'react';
import { Provider } from 'react-redux';
import setupStore from './setupStore';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriversTable from './screens/DriversTable/DriversTableContainer';
import DriverInfo from './screens/DriverInfo';
import { DRIVER_INFO_SCREEN, DRIVERS_TABLE_SCREEN } from './rootConstants';
import { PersistGate } from 'redux-persist/integration/react';

const { persistor, store } = setupStore();

type Screens = {
  'Drivers Table': {};
  'Driver Info': {};
};
const { Navigator, Screen } = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef<Screens>();

export function navigateTo(name: keyof Screens, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

class AppProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <NavigationContainer ref={navigationRef}>
            <Navigator
              initialRouteName={DRIVERS_TABLE_SCREEN}
              screenOptions={{
                headerBackTitleVisible: false,
                gestureEnabled: false
              }}>
              <Screen name={DRIVERS_TABLE_SCREEN} component={DriversTable} />
              <Screen name={DRIVER_INFO_SCREEN} component={DriverInfo} />
            </Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default AppProvider;
