import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "@/components/ui/Text";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { TypePost } from "../explore/ExploreJobSuggestions";
import Badge from "../ui/Badge";

type HomePostProps = {
  data: TypePost;
};

export default function HomePost({ data }: HomePostProps) {
  return (
    <View style={styles.cardContainer}>
      <ImagePlaceholder width={600} height={600} style={styles.cardImage} />
      {/* <View
        style={{
          backgroundColor: "white",
          padding: 12,
          borderRadius: 40,
          position: "absolute",
          right: 16,
          top: 16,
        }}
      >
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={28} />
        </TouchableOpacity>
      </View> */}

      <View style={styles.cardInfoContainer}>
        <View style={styles.cardInfoTextContainer}>
          <Text style={{ fontSize: 18, fontFamily: "GeistSemibold" }}>
            {data.title}
          </Text>

          <View
            style={{
              marginTop: 8,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Badge
              style={{
                marginRight: 4,
              }}
            >
              {data.rate}
            </Badge>
            {data.tags.map((tag, i) => (
              <Badge key={`tag-${i}`} style={{ marginRight: 4, marginTop: 4 }}>
                {tag}
              </Badge>
            ))}
          </View>

          <Text
            style={{ fontSize: 16, marginTop: 8 }}
            numberOfLines={2}
            ellipsizeMode={"tail"}
          >
            {data.description}
          </Text>
        </View>
        <View style={cardFooter.container}>
          <ImagePlaceholder
            width={48}
            height={48}
            style={cardFooter.userAvatar}
          />
          <View style={cardFooter.textContainer}>
            <Text style={{ fontSize: 16, fontFamily: "GeistSemibold" }}>
              John Smith
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="star-outline" size={14} />
              <Text style={{ fontSize: 16, marginLeft: 6 }}>4.5/5</Text>
            </View>
          </View>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Ionicons name="bookmark-outline" size={28} />
          </TouchableOpacity>
          <TouchableOpacity
            style={cardFooter.button}
            onPress={() => router.push(`/post/${data.id}`)}
          >
            <Text
              style={{ color: "white", fontSize: 16, fontFamily: "GeistBold" }}
            >
              View
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "100%",
    height: 480,
    overflow: "hidden",
    borderColor: "lightgray",
    borderWidth: 2,
    //remove this later
    marginVertical: 100,
  },
  cardImage: {
    flex: 6,
  },
  cardInfoContainer: {
    flex: 7,
  },
  cardInfoTextContainer: {
    padding: 16,
    marginBottom: "auto",
    flexShrink: 1,
  },
});

const cardFooter = StyleSheet.create({
  container: {
    backgroundColor: "#ededed",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
  },
  userAvatar: {
    borderRadius: 100,
    marginRight: 12,
  },
  userName: {},
  userRating: {},
  textContainer: {
    justifyContent: "space-between",
    marginVertical: 8,
    marginRight: "auto",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 8,
    marginVertical: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignContent: "center",
    justifyContent: "center",
  },
});
