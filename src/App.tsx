import React from 'react';
import { Provider } from 'react-redux';
import setupStore from './setupStore';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriversTable from './screens/DriversTable/DriversTableContainer';
import DriverInfo from './screens/DriverInfo';
import {
  DRIVER_INFO_SCREEN,
  DRIVERS_TABLE_SCREEN,
  GALLERY_SCREEN,
  HOME,
  PHOTO_SCREEN,
  RACES_SCREEN
} from './rootConstants';
import RacesTable from './screens/RacesTable/RacesTableContainer';
import Gallery from './screens/Gallery/Gallery';
import Photo from './screens/Photo/Photo';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './screens/Home/Home';

const { persistor, store } = setupStore();

type Screens = {
  'Drivers Table': {};
  'Driver Info': {};
  'Races Table': {};
  Gallery: {};
  Photo: {};
};
const { Navigator, Screen } = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef<Screens>();

export function navigateTo(name: keyof Screens, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        initialRouteName={HOME}
        screenOptions={{
          headerBackTitleVisible: false,
          gestureEnabled: false,
          headerTitleAlign: 'center'
        }}>
        <Screen name={HOME} component={Home} />
        <Screen name={GALLERY_SCREEN} component={Gallery} />
        <Screen name={PHOTO_SCREEN} component={Photo} />
        <Screen name={DRIVERS_TABLE_SCREEN} component={DriversTable} />
        <Screen name={DRIVER_INFO_SCREEN} component={DriverInfo} />
        <Screen
          name={RACES_SCREEN}
          component={RacesTable}
          //TODO DZ fix type issue till 30.03.2023
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
