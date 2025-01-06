import { ViewProps, View, StyleSheet, TextProps } from "react-native";
import Text from "./Text";
import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  textStyle?: any;
} & ViewProps &
  TextProps;

export default function Badge({
  children,
  style,
  textStyle,
  ...props
}: BadgeProps) {
  const randomColor: string =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  return (
    <View style={[styles.badgeContainer, style]} {...props}>
      <Text style={[styles.badgeText, textStyle]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: "black",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  badgeText: {
    color: "white",
    fontSize: 14,
    fontFamily: "GeistSemibold",
  },
});
