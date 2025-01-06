import { ReactNode } from "react";
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ViewProps,
  View,
} from "react-native";

type HeaderWrapperProps = {
  children: ReactNode;
  style?: any;
} & ViewProps;

export default function HeaderWrapper({
  children,
  style,
  ...props
}: HeaderWrapperProps) {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      {...props}
    >
      <View style={[styles.safe, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "white",
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    height: 64,
  },
});
