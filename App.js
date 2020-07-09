import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './Routes';

const App = () => {
    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                translucent
                barStyle="light-content"
            />
            <Routes />
        </>
    )
};

export default App;
