import HomePost from "@/components/home/HomePost";
import { FlatList, View } from "react-native";
import { jobSuggestions } from "../explore/ExplorePage";

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
