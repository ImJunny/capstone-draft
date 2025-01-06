import MessagestHeader from "@/components/messages/MessagesHeader";
import ExploreHeader from "@/components/explore/ExploreHeader";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { Stack } from "expo-router";

export default function StackLayout({ segment }: { segment: any }) {
  return (
    <Stack>
      <Stack.Screen
        name="explore"
        options={{ header: () => <ExploreHeader /> }}
      />
      <Stack.Screen
        name="messages"
        options={{ header: () => <MessagestHeader /> }}
      />
      <Stack.Screen
        name="profile"
        options={{ header: () => <ProfileHeader segment={segment} /> }}
      />
    </Stack>
  );
}
