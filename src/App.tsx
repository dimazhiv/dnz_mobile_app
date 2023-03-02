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
import {PersistGate} from "redux-persist/integration/react";
import DriversList from "./features/racers/components/DriversList/DriversListContainer";


const {persistor, store} = setupStore();

class AppProvider extends Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                    <SafeAreaView style={{flex:1}}>
                        <StatusBar/>
                        <RacerButtonContainer/>
                        <DriversList/>
                    </SafeAreaView>
                </PersistGate>
            </Provider>
        )

    }
}

export default AppProvider;
