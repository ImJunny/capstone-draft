import HomeHeader from "@/components/home/HomeHeader";
import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="explore" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="searchOutput" />
      <Stack.Screen
        name="post/[id]"
        options={{
          animation: "fade_from_bottom",
        }}
      />
    </Stack>
  );
}
