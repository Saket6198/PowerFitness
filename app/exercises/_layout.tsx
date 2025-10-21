import { Stack } from "expo-router";
import React from "react";

const ExerciseLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="[name]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ExerciseLayout;
