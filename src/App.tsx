/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import setupStore from './setupStore';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriversTable from './screens/DriversTable';
import DriverInfo from './screens/DriverInfo';

const { persistor, store } = setupStore();

const { Navigator, Screen } = createNativeStackNavigator();

class AppProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <NavigationContainer>
            <Navigator initialRouteName="DriversTable">
              <Screen name="DriversTable" component={DriversTable} />
              <Screen name="DriverInfo" component={DriverInfo} />
            </Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default AppProvider;
