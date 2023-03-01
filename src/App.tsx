/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar} from 'react-native';
import setupStore from "./setupStore";
import RacerButtonContainer from "./features/racers/components/RacerButton/RacerButtonContainer";
import DriverItem from "./features/racers/components/DriverItem/DriverItemContainer";
import DriverButtonContainer from "./features/racers/components/DriverButton/DriverButtonContainer";
import {PersistGate} from "redux-persist/integration/react";


const {persistor, store} = setupStore();

class AppProvider extends Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                    <SafeAreaView>
                        <StatusBar/>
                        <DriverItem/>
                        <RacerButtonContainer/>
                        <DriverButtonContainer/>
                    </SafeAreaView>
                </PersistGate>
            </Provider>
        )

    }
}

export default AppProvider;
