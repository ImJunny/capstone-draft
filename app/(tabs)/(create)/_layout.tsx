import HeaderWrapper from "@/components/ui/HeaderWrapper";
import Text from "@/components/ui/Text";
import HomeHeader from "@/components/home/HomeHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="create"
        options={{
          header: () => <HomeHeader />,
        }}
      />
    </Stack>
  );
}
