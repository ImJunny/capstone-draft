import { Link } from "expo-router";
import { TouchableHighlight, Text } from "react-native";
export default function HomePostButton({ id }: { id: number }) {
  return (
    <TouchableHighlight
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        height: 64,
        borderRadius: 8,
      }}
    >
      <Link
        href={`./home/${id}`}
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        Go
      </Link>
    </TouchableHighlight>
  );
}
