import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderWrapper from "../ui/HeaderWrapper";
import { router } from "expo-router";

export default function SearchHeader() {
  return (
    <HeaderWrapper>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={28} style={{ marginRight: 12 }} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search for a job..."
        style={styles.searchBar}
        autoFocus
        onSubmitEditing={() => router.replace("/searchOutput")}
      />
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
