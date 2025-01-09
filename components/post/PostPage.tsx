import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import HeaderWrapper from "../ui/HeaderWrapper";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Badge from "../ui/Badge";

type PostPageProps = {
  id: string | string[];
};

export default function PostPage({ id }: PostPageProps) {
  return (
    <>
      <ScrollView>
        <ImagePlaceholder width={300} height={300} style={{ width: "100%" }} />
        <View
          style={{
            backgroundColor: "white",
            padding: 16,
            paddingBottom: 0,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Ionicons name="mail-outline" size={28} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: "auto" }}>
            <Ionicons name="bookmark-outline" size={28} />
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <Ionicons name="ellipsis-vertical" size={28} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flexGrow: 1,
            padding: 16,
            borderBottomWidth: 1,
            borderColor: "lightgray",
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "GeistSemibold" }}>
            Test
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
              $150
            </Badge>
            <Badge style={{ marginRight: 4, marginTop: 4 }}>tech</Badge>
            <Badge style={{ marginRight: 4, marginTop: 4 }}>remote</Badge>
          </View>

          <Text style={{ fontSize: 16, marginTop: 20 }}>
            Duis ad et phasellus litora nam sem tristique vulputate ex. Ipsum
            senectus auctor varius fusce in aptent. Varius felis urna, auctor
            rhoncus vitae vulputate neque semper commodo. Montes vel maximus
            netus lorem id parturient. Facilisi inceptos tempus egestas ex sed.{" "}
            {"\n\n"}
            Accumsan felis a nibh neque aenean, justo adipiscing scelerisque
            diam. Sodales hendrerit primis condimentum pretium sagittis et
            blandit rhoncus. Curae natoque tempus praesent dui nostra. {"\n\n"}
            Erat ultricies magnis habitant pellentesque senectus magna praesent
            odio habitasse. Nascetur ornare eleifend tristique inceptos elit.
            Ante pulvinar velit rutrum ac justo! Ultrices nisl libero gravida
            habitasse vel.
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              marginTop: 12,
              marginBottom: 12,
            }}
          >
            {/* <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: "white",
                  borderWidth: 2,
                },
              ]}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  textAlign: "center",
                  fontFamily: "GeistSemibold",
                }}
              >
                Message
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.button}>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  textAlign: "center",
                  fontFamily: "GeistSemibold",
                }}
              >
                Accept
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            padding: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ImagePlaceholder
              width={48}
              height={48}
              style={{ borderRadius: 40 }}
            />
            <View style={{ marginLeft: 12, justifyContent: "center" }}>
              <Text style={{ fontSize: 16, fontFamily: "GeistSemibold" }}>
                John Smith
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="star-outline" size={14} />
                <Text style={{ fontSize: 16, marginLeft: 6 }}>4.5/5</Text>
              </View>
            </View>
            <TouchableOpacity style={{ marginLeft: "auto" }}>
              <Ionicons name="chevron-forward" size={28} />
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 12, fontSize: 16 }}>
            Magnis penatibus ad magna consequat conubia. Nulla elit lobortis
            aliquam tempor mus. Nam nisl justo tortor varius facilisis. Vivamus
            volutpat massa nam consequat massa sem ad.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    borderRadius: 8,
    minWidth: 120,
    marginLeft: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignContent: "center",
    justifyContent: "center",
  },
});
