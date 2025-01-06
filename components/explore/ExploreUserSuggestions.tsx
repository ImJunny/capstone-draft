import { ScrollView, StyleSheet, View, Text } from "react-native";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export type TypeUser = {
  id: number;
  name: string;
  biography: string;
};

type ExploreSuggestionsProps = {
  data: TypeUser[];
};

export default function ExploreUserSuggestions({
  data,
}: ExploreSuggestionsProps) {
  return (
    <View style={{ marginTop: 24 }}>
      <Text style={styles.suggestionTitle}>User Suggestions</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.suggestionWrapper}
      >
        {data.map((suggestion, i) => (
          <View style={styles.suggestionContainer} key={`user-${i}`}>
            <ImagePlaceholder
              width={100}
              height={100}
              style={styles.suggestionImg}
            />
            <View style={styles.suggestionTextContainer}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {suggestion.name}
              </Text>
              <Text style={{ fontSize: 16 }}>{suggestion.biography}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  suggestionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
    marginLeft: 12,
  },
  suggestionWrapper: { paddingHorizontal: 12 },
  suggestionContainer: {
    backgroundColor: "white",
    borderRadius: 4,
    overflow: "hidden",
    flexDirection: "row",
    marginBottom: 8,
    padding: 8,
  },
  suggestionImg: {
    width: 72,
    height: 72,
    borderRadius: 64,
    marginHorizontal: 4,
  },
  suggestionName: {
    textAlign: "center",
    color: "white",
    position: "absolute",
    bottom: 12,
    fontSize: 20,
  },
  suggestionTextContainer: {
    flexDirection: "column",
    marginLeft: 24,
    justifyContent: "center",
  },
});
