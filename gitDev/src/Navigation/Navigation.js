import {createStackNavigator, createAppContainer} from 'react-navigation';
import SingleUser from '../Screens/DevList.Screen.js';

const MainNavigator = createStackNavigator({
  User: {screen: SingleUser},
});

const App = createAppContainer(MainNavigator);

export default App;
