import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NoteScreen from './src/screens/NoteScreen'
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  
  {
    Note:NoteScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Uni Buddy',
    },
  }
);

export default createAppContainer(navigator);
