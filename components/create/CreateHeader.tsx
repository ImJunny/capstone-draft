import HeaderWrapper from "../ui/HeaderWrapper";
import Text from "../ui/Text";

export default function CreateHeader() {
  return (
    <HeaderWrapper style={{ flexDirection: "row" }}>
      <Text
        style={{
          fontFamily: "GeistSemibold",
          fontSize: 18,
        }}
      >
        Create
      </Text>
    </HeaderWrapper>
  );
}
