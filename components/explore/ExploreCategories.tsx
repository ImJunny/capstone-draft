import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImageBackgroundPlaceholder from "../ui/ImageBackgroundPlaceholder";

type ExploreCategoriesProps = {
  data: { name: string }[];
};

export default function ExploreCategories({ data }: ExploreCategoriesProps) {
  return (
    <View>
      <Text style={styles.categoryTitle}>Top Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryWrapper}
      >
        {data.map((category, i) => (
          <View style={styles.categoryContainer} key={`category-${i}`}>
            <ImageBackgroundPlaceholder width={120} height={120}>
              <View style={styles.categoryImgOverlay}>
                <Text style={styles.categoryName}>{category.name}</Text>
              </View>
            </ImageBackgroundPlaceholder>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
    marginLeft: 12,
  },
  categoryWrapper: {
    paddingLeft: 12,
    paddingRight: 4,
    marginVertical: 4,
  },
  categoryContainer: {
    overflow: "hidden",
    backgroundColor: "white",
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 8,
  },
  categoryImgOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  categoryName: {
    textAlign: "center",
    color: "white",
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
});
