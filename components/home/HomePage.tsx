import { TypePost } from "@/components/home/HomePost";
import { Link } from "expo-router";
import { Dimensions, FlatList, StatusBar, Text, View } from "react-native";

export const posts: TypePost[] = [
  {
    id: 1,
    title: "Job Title First",
    description: "Lorem ipsum.",
  },
  {
    id: 2,
    title: "Job Title Two",
    description: "Lorem ipsum.",
  },
  {
    id: 3,
    title: "Job Title Last",
    description: "Lorem ipsum.",
  },
  {
    id: 4,
    title: "Job Title Lasttt",
    description: "Lorem ipsum.",
  },
];

export default function HomePage() {
  return (
    <View>
      <Text>HomePage</Text>
    </View>
  );
}
