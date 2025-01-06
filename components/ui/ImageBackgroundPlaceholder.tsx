import { ImageBackground, ImageBackgroundProps } from "react-native";
import { ReactNode } from "react";

type ImagePlaceholderProps = {
  children: ReactNode;
  width: number;
  height: number;
} & ImageBackgroundProps;

export default function ImageBackgroundPlaceholder({
  children,
  width,
  height,
  ...props
}: ImagePlaceholderProps) {
  return (
    <ImageBackground
      source={{
        uri: `https://picsum.photos/${width}/${height}?${Math.random()}`,
      }}
      {...props}
    >
      {children}
    </ImageBackground>
  );
}
