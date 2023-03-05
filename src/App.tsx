import React, { Component } from 'react';
import { Provider } from 'react-redux';
import setupStore from './setupStore';
import { PersistGate } from 'redux-persist/integration/react';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriversTable from './screens/DriversTable';
import DriverInfo from './screens/DriverInfo';
import { DRIVER_INFO_SCREEN, DRIVERS_TABLE_SCREEN } from './rootConstants';

const { persistor, store } = setupStore();

const { Navigator, Screen } = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

export function navigateTo(name, params) {
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
            <Navigator initialRouteName={DRIVERS_TABLE_SCREEN}>
              <Screen name={DRIVERS_TABLE_SCREEN} component={DriversTable} options={{title:"Drivers"}} />
              <Screen name={DRIVER_INFO_SCREEN} component={DriverInfo} options={{title:"Driver Info"}}/>
            </Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default AppProvider;
