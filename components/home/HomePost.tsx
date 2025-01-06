import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "@/components/ui/Text";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Ionicons from "@expo/vector-icons/Ionicons";

export type TypePost = { id: number; title: string; description: string };

type HomePostProps = {
  data: TypePost;
};

export default function HomePost({ data }: HomePostProps) {
  return (
    <View style={styles.cardContainer}>
      <ImagePlaceholder width={600} height={600} style={styles.cardImage} />
      <View style={styles.cardInfoContainer}>
        <View style={styles.cardInfoTextContainer}>
          <Text style={{ fontSize: 22, fontFamily: "GeistSemibold" }}>
            {data.title}
          </Text>
          <Text style={{ fontSize: 16 }}>{data.description}</Text>
        </View>
        <View style={cardFooter.container}>
          <ImagePlaceholder
            width={56}
            height={56}
            style={cardFooter.userAvatar}
          />
          <View style={cardFooter.textContainer}>
            <Text style={{ fontSize: 16 }}>John Smith</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="star-outline" size={14} />
              <Text style={{ fontSize: 16, marginLeft: 6 }}>4.5/5</Text>
            </View>
          </View>
          <TouchableOpacity style={cardFooter.button}>
            <Text style={{ color: "white", fontSize: 16 }}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    width: "100%",
    height: 500,
    overflow: "hidden",
  },
  cardImage: {
    flex: 1,
  },
  cardInfoContainer: {
    flex: 1,
  },
  cardInfoTextContainer: { padding: 20, marginBottom: "auto" },
});

const cardFooter = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    padding: 12,
  },
  userAvatar: {
    borderRadius: 100,
    marginRight: 12,
  },
  userName: {},
  userRating: {},
  textContainer: { justifyContent: "space-between", marginVertical: 8 },
  button: {
    backgroundColor: "black",
    borderRadius: 8,
    marginVertical: 8,
    marginLeft: "auto",
    paddingHorizontal: 20,
    alignContent: "center",
    justifyContent: "center",
  },
});
