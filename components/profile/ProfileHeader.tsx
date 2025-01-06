import { TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderWrapper from "../ui/HeaderWrapper";
import Text from "../ui/Text";
import { Link, router } from "expo-router";

export default function ProfileHeader() {
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
        @johnn005
      </Text>
      <Link href={"/profile"} asChild>
        <TouchableOpacity>
          <Ionicons name="menu" size={28} />
        </TouchableOpacity>
      </Link>
    </HeaderWrapper>
  );
}
