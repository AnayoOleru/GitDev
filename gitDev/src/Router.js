import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import DevList from './Screens/DevList.Screen';

const RouterComponent = () => {
    console.log('Router.js')
    return (
<Router>
    <Scene key="Devlist" component={DevList} title="" />
</Router>
    );
};

export default RouterComponent;