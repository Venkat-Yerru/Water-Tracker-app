import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WaterTrackerScreen from './WaterTrackerScreen/WaterTrackerScreen';
import SettingsScreen from './SettingsScreen/SettingsScreen';
import HomeScreen from './HomeScreen/HomeScreen'; // Import the new home screen component

const Stack = createStackNavigator();

const App = () => {
  const [goal, setGoal] = useState(0);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Pass WaterTrackerScreen component with goal as a prop */}
        <Stack.Screen name="WaterTrackerScreen">
          {props => <WaterTrackerScreen {...props} goal={goal} />}
        </Stack.Screen>
        {/* Pass SettingsScreen component with setGoal as a prop */}
        <Stack.Screen name="SettingsScreen">
          {props => <SettingsScreen {...props} setGoal={setGoal} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
