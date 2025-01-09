import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderWrapper from "../ui/HeaderWrapper";
import Text from "../ui/Text";
import { Link } from "expo-router";

export default function HomeHeader() {
  return (
    <HeaderWrapper style={{ flexDirection: "row" }}>
      <Text
        style={{
          fontFamily: "LexendExtraBold",
          fontSize: 24,
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        Hustle
      </Text>

      <Link href="/home" asChild>
        <TouchableOpacity>
          <Ionicons name="filter" size={28} />
        </TouchableOpacity>
      </Link>
    </HeaderWrapper>
  );
}
