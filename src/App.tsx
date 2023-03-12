import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import setupStore from './setupStore';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriversTable from './screens/DriversTable/DriversTableContainer';
import DriverInfo from './screens/DriverInfo';
import { DRIVER_INFO_SCREEN, DRIVERS_TABLE_SCREEN, RACES_SCREEN } from './rootConstants';
import { initDataRequest } from './features/racers/sagaActions';
import RacesTable from './screens/RacesTable/RacesTableContainer';
import {PersistGate} from "redux-persist/integration/react";

const { persistor, store } = setupStore();

type Screens = {
  'Drivers Table': {};
  'Driver Info': {};
  'Races Table': {};
};
const { Navigator, Screen } = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef<Screens>();

export function navigateTo(name: keyof Screens, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function AppNavigation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initDataRequest());
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        initialRouteName={DRIVERS_TABLE_SCREEN}
        screenOptions={{
          headerBackTitleVisible: false,
          gestureEnabled: false
        }}>
        <Screen name={DRIVERS_TABLE_SCREEN} component={DriversTable} />
        <Screen name={DRIVER_INFO_SCREEN} component={DriverInfo} />
        <Screen
          name={RACES_SCREEN}
          component={RacesTable}
          //TODO DZ fix type issue till 15.03.2023
          options={({ route }) => ({ title: route.params?.title })}
        />
      </Navigator>
    </NavigationContainer>
  );
}

function AppProvider() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}

export default AppProvider;
