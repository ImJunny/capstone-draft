import MessagesHeader from "@/components/messages/MessagesHeader";
import HomeHeader from "@/components/home/HomeHeader";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { Stack } from "expo-router";

export default function StackLayout({ segment }: { segment: any }) {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ header: () => <HomeHeader /> }} />
      <Stack.Screen
        name="messages"
        options={{ header: () => <MessagesHeader /> }}
      />
      <Stack.Screen
        name="profile"
        options={{ header: () => <ProfileHeader segment={segment} /> }}
      />
    </Stack>
  );
}
