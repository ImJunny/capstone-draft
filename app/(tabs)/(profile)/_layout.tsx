import ProfileHeader from "@/components/profile/ProfileHeader";
import { Stack } from "expo-router";

export default function StackLayout({ segment }: { segment: any }) {
  return (
    <Stack screenOptions={{ animation: "slide_from_right" }}>
      <Stack.Screen
        name="profile"
        options={{
          header: () => <ProfileHeader segment={segment} />,
        }}
      />
    </Stack>
  );
}
