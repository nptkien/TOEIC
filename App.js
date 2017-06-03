import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import Test from './Test';
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Test />
            </Provider>
        );
    }
}

export default App;