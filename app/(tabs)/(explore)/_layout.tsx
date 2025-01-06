import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="explore" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="searchOutput" options={{ animation: "fade" }} />
    </Stack>
  );
}
