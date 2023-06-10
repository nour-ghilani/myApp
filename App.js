import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import DataScreen from './screens/DataScreen'
import Empty from './screens/Empty'
import One from './screens/One'
import Two from './screens/Two'
import Three from './screens/Three'
import Four from './screens/Four'
import Five from './screens/Five'
import Six from './screens/Six'
import Seven from './screens/Seven'
import Eight from './screens/Eight'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
        
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  DataScreen : DataScreen,
    Empty : Empty,
  One : One,
  Two : Two,
  Three : Three,
  Four: Four,
  Five : Five,
  Six : Six,
  Seven : Seven,
  Eight: Eight,
})


const AppContainer = createAppContainer(AppNavigator)
