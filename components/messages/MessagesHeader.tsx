import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderWrapper from "../ui/HeaderWrapper";
import { Link, router } from "expo-router";
import Text from "../ui/Text";

export default function MessagesHeader() {
  return (
    <HeaderWrapper>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={28} />
      </TouchableOpacity>
      <Text
        style={{
          marginLeft: 12,
          marginRight: "auto",
          fontSize: 18,
          fontFamily: "GeistSemibold",
        }}
      >
        Messages
      </Text>
      <Link href="/messages" asChild>
        <TouchableOpacity>
          <Ionicons
            name="ellipsis-vertical"
            size={28}
            style={{ marginLeft: 12 }}
          />
        </TouchableOpacity>
      </Link>
    </HeaderWrapper>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    backgroundColor: "lightgray",
    borderRadius: 8,
    paddingHorizontal: 12,
    flexGrow: 1,
  },
});
