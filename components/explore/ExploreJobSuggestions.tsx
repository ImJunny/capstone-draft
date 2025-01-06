import { ScrollView, StyleSheet, View, Text } from "react-native";
import ImageBackgroundPlaceholder from "../ui/ImageBackgroundPlaceholder";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export type TypePost = {
  id: number;
  title: string;
  description: string;
  rate: number;
};

type ExploreSuggestionsProps = {
  data: TypePost[];
};

export default function ExploreJobSuggestions({
  data,
}: ExploreSuggestionsProps) {
  return (
    <View style={{ marginTop: 24 }}>
      <Text style={styles.suggestionsTitle}>Job Suggestions</Text>
      <View style={styles.suggestionsWrapper}>
        {data.map((suggestion, i) => (
          <View style={styles.suggestionContainer} key={`job-${i}`}>
            <ImagePlaceholder
              width={100}
              height={100}
              style={styles.suggestionImg}
            />
            <View
              style={[
                styles.suggestionTextContainer,
                i < data.length - 1 && styles.borderBetween,
              ]}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {suggestion.title}
              </Text>
              <Text style={{ fontSize: 16 }}>{suggestion.description}</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                ${suggestion.rate}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  suggestionsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
    marginLeft: 12,
  },
  suggestionsWrapper: {
    marginHorizontal: 12,
    borderRadius: 8,
    overflow: "hidden",
  },
  suggestionContainer: {
    backgroundColor: "white",
    overflow: "hidden",
    flexDirection: "row",
  },
  suggestionImg: {
    width: 100,
    height: 100,
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
    flex: 1,
    padding: 12,
  },
  borderBetween: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
});
