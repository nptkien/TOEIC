import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <View>
                    <Text>
                        AAAA
                </Text>
                </View>
            </Provider>
        );
    }
}

export default App;