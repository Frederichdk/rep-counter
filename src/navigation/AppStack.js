import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens/HomeScreen";
import { LogScreen } from "../screens/LogScreen";
import { DisplayWorkoutScreen } from "../screens/DisplayWorkoutScreen";
import { WorkoutScreen } from "../screens/WorkoutScreen";
import { RoutinesScreen } from "../screens/RoutinesScreen";
import { CreateRoutineScreen } from "../screens/CreateRoutineScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { TitleBar } from "../components/TitleBar";

import HomeIcon from "../../assets/icons/home";
import LogIcon from "../../assets/icons/log";
import WorkoutIcon from "../../assets/icons/dumbell";
import RoutinesIcon from "../../assets/icons/repeat";

import { colors } from "../utils/colors";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LogStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Log"
      screenOptions={{
        header: () => <TitleBar />,
      }}
    >
      <Stack.Screen name="Log" component={LogScreen} />
      <Stack.Screen
        name="DisplayWorkout"
        component={DisplayWorkoutScreen}
        options={{ header: () => <TitleBar showBackButton={true} /> }}
      />
    </Stack.Navigator>
  );
};

const RoutineStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Routines"
      screenOptions={{
        header: () => <TitleBar />,
      }}
    >
      <Stack.Screen name="Routines" component={RoutinesScreen} />
      <Stack.Screen
        name="CreateRoutine"
        component={CreateRoutineScreen}
        options={{ header: () => <TitleBar showBackButton={true} /> }}
      />
    </Stack.Navigator>
  );
};

export const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => <TitleBar />,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.gray,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon width={50} height={50} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LogStack"
        component={LogStack}
        options={{
          tabBarIcon: ({ color }) => (
            <LogIcon width={50} height={50} fill={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <WorkoutIcon width={50} height={50} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="RoutineStack"
        component={RoutineStack}
        options={{
          tabBarIcon: ({ color }) => (
            <RoutinesIcon width={50} height={50} fill={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: () => (
            <TitleBar showBackButton={true} showProfileButton={false} />
          ),
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
};
