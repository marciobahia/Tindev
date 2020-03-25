/* eslint-disable prettier/prettier */
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import Login from './pages/Login'
import Main from './pages/Main';


export default createAppContainer(
    createStackNavigator({
        Login,
        Main,
    })
)  