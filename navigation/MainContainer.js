import React, { useState, useRef, useEffect } from "react";
import { BottomNavigation, IconButton } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Animated,
} from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Rect } from "react-native-svg";
// Screens
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./ProfileScreen";

const homeName = "Home";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === profileName) {
              iconName = focused ? "profile" : "profile-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}