import HomeHeader from "@/components/home/HomeHeader";
import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen
        name="post/[id]"
        options={{ animation: "fade_from_bottom" }}
      />
    </Stack>
  );
}
