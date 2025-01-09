import { TouchableOpacity, View } from "react-native";
import React from "react";
import HeaderWrapper from "../ui/HeaderWrapper";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Text from "../ui/Text";

export default function PostHeader() {
  return (
    <HeaderWrapper style={{ justifyContent: "space-between" }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={28} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="ellipsis-vertical" size={28} />
      </TouchableOpacity>
    </HeaderWrapper>
  );
}
