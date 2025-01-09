import HomePost from "@/components/home/HomePost";
import { FlatList, Touchable, TouchableOpacity, View } from "react-native";
import { jobSuggestions } from "../explore/ExplorePage";
import Text from "../ui/Text";

export default function HomePage() {
  const posts = jobSuggestions;
  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderColor: "lightgray",
          flexDirection: "row",
          height: 48,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            height: "100%",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 16 }}>Work</Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "black",
              height: 4,
              position: "absolute",
              bottom: 0,
              width: "100%",
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 16 }}>Hire</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 48 }}
        data={posts}
        renderItem={({ item }) => <HomePost data={item} />}
      />
    </View>
  );
}
