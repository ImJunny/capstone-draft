import HeaderWrapper from "../ui/HeaderWrapper";
import Text from "../ui/Text";

export default function JobsHeader() {
  return (
    <HeaderWrapper style={{ flexDirection: "row" }}>
      <Text
        style={{
          fontFamily: "GeistSemibold",
          fontSize: 18,
        }}
      >
        Jobs
      </Text>
    </HeaderWrapper>
  );
}
