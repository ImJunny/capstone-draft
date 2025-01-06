import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderWrapper from "../ui/HeaderWrapper";
import { router } from "expo-router";

export default function SearchOutputHeader() {
  return (
    <HeaderWrapper>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={28} style={{ marginRight: 12 }} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search for a job..."
        style={styles.searchBar}
        onSubmitEditing={() => console.log("entered")}
      />
      <TouchableOpacity
        onPress={() => {
          console.log("clicked on filter");
        }}
      >
        <Ionicons name="filter" size={28} style={{ marginLeft: 12 }} />
      </TouchableOpacity>
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
