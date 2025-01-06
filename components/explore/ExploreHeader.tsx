import {
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderWrapper from "../ui/HeaderWrapper";
import { Link } from "expo-router";

export default function ExploreHeader() {
  return (
    <HeaderWrapper>
      <Link href="/search" asChild>
        <TouchableOpacity style={styles.searchBar} activeOpacity={0.5}>
          <TextInput placeholder="Search for a job..." editable={false} />
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
