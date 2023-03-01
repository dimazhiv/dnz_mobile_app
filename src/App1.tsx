import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect, Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {actions as appActions} from 'appFeature';
import {actions as navigationActions} from 'navigationFeature';
import configureStore from './configureStore';
import 'react-native-gesture-handler';
import RootNavigator from './RootNavigator';

class App1 extends Component {
    static propTypes = {
        initAppRequest: PropTypes.func.isRequired,
        onNavigationStateChange: PropTypes.func.isRequired,
    };

    _handleNavigatorRef = (navigatorRef) => this.props.initAppRequest(navigatorRef);

    _handleNavigationStateChange = (prevState, currentState) =>
        this.props.onNavigationStateChange(prevState, currentState);

    render() {
        return <RootNavigator ref={this._handleNavigatorRef}
                              onNavigationStateChange={this._handleNavigationStateChange}/>;
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            initAppRequest: appActions.initAppRequest,
            onNavigationStateChange: navigationActions.onNavigationStateChange,
        },
        dispatch
    );
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App1);

const {persistor, store} = configureStore();

class AppProvider extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <AppContainer/>
                </PersistGate>
            </Provider>
        );
    }
}

export default AppProvider;
