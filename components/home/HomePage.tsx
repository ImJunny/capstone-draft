import HomePost, { TypePost } from "@/components/home/HomePost";
import { Link } from "expo-router";
import { Dimensions, FlatList, StatusBar, View } from "react-native";
import { jobSuggestions } from "../pages/ExplorePage";

export default function HomePage() {
  const posts = jobSuggestions;
  return (
    <View>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 32 }}
        data={posts}
        renderItem={({ item }) => <HomePost data={item} />}
      />
    </View>
  );
}
