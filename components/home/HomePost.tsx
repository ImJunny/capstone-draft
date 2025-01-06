import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Dimensions, StatusBar, View, StyleSheet, Image } from "react-native";
import HomeMessageButton from "./HomeMessageButton";
import Text from "@/components/ui/Text";

export type TypePost = { id: number; title: string; description: string };
export default function HomePost({ id, title, description }: TypePost) {
  const bottomNavHeight = useBottomTabBarHeight();
  const headerHeight = (StatusBar.currentHeight ?? 0) + bottomNavHeight;
  const postHeight =
    Dimensions.get("window").height - headerHeight - bottomNavHeight;
  const styles = createStyles(postHeight);

  return (
    <View style={styles.viewWrapper}>
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} />
        <View style={styles.cardInfoContainer}>
          <Text style={{ fontSize: 28 }}>{title}</Text>
          <Text>{description}</Text>
          <View style={{ flexDirection: "row" }}>
            <HomeMessageButton id={id} />
          </View>
        </View>
      </View>
    </View>
  );
}

const createStyles = (postHeight: number) =>
  StyleSheet.create({
    viewWrapper: {
      height: postHeight,
      justifyContent: "center",
    },
    cardContainer: {
      height: postHeight * 0.8 + 44,
      borderRadius: 20,
      overflow: "hidden",
      borderColor: "lightgray",
      borderWidth: 2,
    },
    cardImage: { backgroundColor: "black", flex: 1 },
    cardInfoContainer: { backgroundColor: "white", flex: 1, padding: 8 },
  });
