import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import homescreen from "./screens/Home";
import StarMapScreen from "./screens/starmap";
import SpaceCraftScreen from "./screens/spacecraft";
import DailyPicScreen from "./screens/dailypic";
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home"  screenOptions={{
        headerShown:false
      }}>
<Stack.Screen name="home" component={homescreen}/>
<Stack.Screen name="starmap" component={StarMapScreen}/>
<Stack.Screen name="spacecraft" component={SpaceCraftScreen}/>
<Stack.Screen name="dailypic" component={dailypicScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
