import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import RecentPage from './screens/RecentPage';
import BookMark from './screens/bookMark';
import SubjectPage from './screens/SubjectPage';

const Tab = createMaterialTopTabNavigator();
const Drawer=createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigator(){
  return(
    <Drawer.Navigator options={{
      headerShown: false
    }}>
      <Drawer.Screen name="Top Tab"  component={TopTabNavigator}/>
      <Drawer.Screen name="BookMark" component={BookMark}/>
      <Drawer.Screen name="Subject" component={SubjectPage}/>
    </Drawer.Navigator>
  )
}

function TopTabNavigator(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Recent" component={RecentPage}/>
      <Tab.Screen name="Favorite" component={BookMark}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen
         name="Drawer"
         component={DrawerNavigator}
         />
        </Stack.Navigator>

      


      </NavigationContainer>
      </>
  );
}
