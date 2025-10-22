import "@/global.css";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { withLayoutContext } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const { Navigator } = createStackNavigator();

// Create JS stack for better Android modal support
export const JsStack = withLayoutContext(Navigator);

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <JsStack screenOptions={{ headerShown: false, gestureEnabled: true, gestureDirection: 'vertical'}}>
        <JsStack.Screen name="index" options={{ headerShown: false }} />
        <JsStack.Screen name="home" options={{ headerShown: false }} />
        <JsStack.Screen
          name="exerciseDetails"
          options={{
            ...TransitionPresets.ModalPresentationIOS,
            presentation: "modal",
          }}
        />
      </JsStack>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
