import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ChatPage() {
  return (
    <View>
      <Text>ChatPage</Text>
      <Link href="/profileVisit">
        <Text>Go to profile</Text>
      </Link>
    </View>
  );
}
