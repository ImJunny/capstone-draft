import HeaderWrapper from "@/components/ui/HeaderWrapper";
import Text from "@/components/ui/Text";
import HomeHeader from "@/components/home/HomeHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, Stack } from "expo-router";
import JobsHeader from "@/components/jobs/JobsHeader";

export default function StackLayout() {
  return (
    <Stack screenOptions={{ animation: "slide_from_right" }}>
      <Stack.Screen
        name="jobs"
        options={{
          header: () => <JobsHeader />,
        }}
      />
    </Stack>
  );
}
