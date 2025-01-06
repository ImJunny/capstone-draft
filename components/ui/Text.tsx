import { ReactNode } from "react";
import {
  Text as ReactNativeText,
  TextProps as ReactNativeTextProps,
} from "react-native";

type TextProps = {
  children: ReactNode;
} & ReactNativeTextProps;

export default function Text({ children, style, ...props }: TextProps) {
  return (
    <ReactNativeText style={[{ fontFamily: "Geist" }, style]} {...props}>
      {children}
    </ReactNativeText>
  );
}
