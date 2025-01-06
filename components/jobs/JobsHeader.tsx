import { TouchableOpacity } from "react-native";
import HeaderWrapper from "../ui/HeaderWrapper";
import Text from "../ui/Text";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

export default function JobsHeader() {
  return (
    <HeaderWrapper
      style={{ flexDirection: "row", justifyContent: "space-between" }}
    >
      <Text
        style={{
          fontFamily: "GeistSemibold",
          fontSize: 18,
        }}
      >
        Jobs
      </Text>
      <Link href="/messages" asChild>
        <TouchableOpacity>
          <Ionicons name="chatbox-ellipses-outline" size={28} />
        </TouchableOpacity>
      </Link>
    </HeaderWrapper>
  );
}
