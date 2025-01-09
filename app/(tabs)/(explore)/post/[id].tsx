import { View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";
import Text from "@/components/ui/Text";
import HomeHeader from "@/components/home/HomeHeader";
import PostPage from "@/components/post/PostPage";
import PostHeader from "@/components/post/PostHeader";

export default function PostScreen() {
  const { id } = useLocalSearchParams();
  return (
    <>
      <PostHeader />
      <PostPage id={id} />
    </>
  );
}
