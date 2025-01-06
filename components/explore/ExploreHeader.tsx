import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderWrapper from "../ui/HeaderWrapper";
import { Link } from "expo-router";

export default function ExploreHeader() {
  return (
    <HeaderWrapper>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a job..."
      ></TextInput>
      <Link href="/messages" asChild>
        <TouchableOpacity>
          <Ionicons
            name="chatbox-ellipses-outline"
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
