import { TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeaderWrapper from "../ui/HeaderWrapper";
import Text from "../ui/Text";
import { Link, router } from "expo-router";

export default function ProfileHeader({ segment }: { segment: any }) {
  const isBackPage = segment !== undefined || "(profile)";
  // console.log(segment);
  // console.log(isBackPage);

  return (
    <HeaderWrapper style={{ flexDirection: "row" }}>
      {isBackPage && (
        <TouchableOpacity onPress={() => router.back()}>
          <View>
            <Ionicons name="arrow-back" size={28} />
          </View>
        </TouchableOpacity>
      )}
      <Text
        style={{
          fontFamily: "Geist",
          fontSize: 20,
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        @johnn005
      </Text>

      {!isBackPage && (
        <Link href={"/home"} asChild>
          <TouchableOpacity>
            <Ionicons name="menu" size={28} />
          </TouchableOpacity>
        </Link>
      )}
    </HeaderWrapper>
  );
}
