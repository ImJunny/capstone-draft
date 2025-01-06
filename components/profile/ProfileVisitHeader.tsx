import { TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderWrapper from "../ui/HeaderWrapper";
import Text from "../ui/Text";
import { router } from "expo-router";

export default function ProfileVisitHeader() {
  return (
    <HeaderWrapper style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => router.back()}>
        <View>
          <Ionicons name="chevron-back" size={28} />
        </View>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "GeistSemibold",
          fontSize: 18,
          marginLeft: 12,
        }}
      >
        @johnn005
      </Text>
    </HeaderWrapper>
  );
}
