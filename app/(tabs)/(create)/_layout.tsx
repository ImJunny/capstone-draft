import { Stack } from "expo-router";
import CreateHeader from "@/components/create/CreateHeader";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="create"
        options={{
          header: () => <CreateHeader />,
        }}
      />
    </Stack>
  );
}
