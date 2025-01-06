import { Image, ImageProps } from "react-native";

type ImagePlaceholderProps = {
  width: number;
  height: number;
} & ImageProps;
export default function ImagePlaceholder({
  width,
  height,
  style,
  ...props
}: ImagePlaceholderProps) {
  return (
    <Image
      source={{
        uri: `https://picsum.photos/${width}/${height}?random=${Math.random()}`,
      }}
      style={[{ width: width, height: height }, style]}
      {...props}
    />
  );
}
