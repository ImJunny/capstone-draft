import MessagesHeader from "@/components/messages/MessagesHeader";
import HomeHeader from "@/components/home/HomeHeader";
import { Stack } from "expo-router";
import ProfileVisitHeader from "@/components/profile/ProfileVisitHeader";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ header: () => <HomeHeader /> }} />
    </Stack>
  );
}
