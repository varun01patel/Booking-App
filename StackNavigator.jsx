import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import SavedScreen from './Screens/SavedScreen';
import BookingScreen from './Screens/BookingScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SearchScreen from './Screens/SearchScreen';
import PlacesScreen from './Screens/PlacesScreen';
import MapScreen from './Screens/MapScreen';
import PropertyinfoScreen from './Screens/PropertyinfoScreen';
import RoomScreen from './Screens/RoomScreen';
import UserScreen from './Screens/UserScreen';
import ConfirmationScreen from './Screens/ConfirmationScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="#003580" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={HomeScreen}
        options={{
          tabBarLabel: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="heart" size={24} color="black" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={HomeScreen}
        options={{
          tabBarLabel: "Bookings",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="notifications" size={24} color="#003580" />
            ) : (
              <Ionicons name="notifications-outline" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="#003580" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Places" component={PlacesScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Info" component={PropertyinfoScreen} />
      <Stack.Screen name="Rooms" component={RoomScreen} />
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{ headerShown: false }}/>

    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
