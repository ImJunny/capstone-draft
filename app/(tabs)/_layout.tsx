import { Tabs } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dimensions, View } from "react-native";
import TabBar from "@/components/ui/TabBar";

export default function TabLayout() {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={{ flex: 1, width, height }}>
      <Tabs
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{
          headerShown: false,
          headerStyle: { height: 52 },
          tabBarStyle: { height: 52 },
          tabBarLabel: "",
          tabBarItemStyle: {
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name={focused ? "home" : "home-outline"} size={28} />
            ),
          }}
        />
        <Tabs.Screen
          name="(explore)"
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={28}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(create)"
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: focused ? "black" : "#ededed",
                  padding: 4,
                  borderRadius: 8,
                }}
              >
                <Ionicons
                  name={focused ? "add" : "add-outline"}
                  size={28}
                  color={focused ? "white" : "black"}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="(jobs)"
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "calendar-clear" : "calendar-clear-outline"}
                size={28}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(profile)"
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                size={28}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
