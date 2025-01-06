import MessagestHeader from "@/components/messages/MessagesHeader";
import ExploreHeader from "@/components/explore/ExploreHeader";
import { Stack } from "expo-router";
import ProfileVisitHeader from "@/components/profile/ProfileVisitHeader";

export default function StackLayout() {
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
        options={{ header: () => <ProfileVisitHeader /> }}
      />
    </Stack>
  );
}
