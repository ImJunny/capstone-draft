import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { Easing } from "react-native-reanimated";
import JobsScreen from "./jobs";
import MessagesScreen from "./messages";
import ProfileVisitScreen from "./profileVisit";

const Stack = createStackNavigator();

const customSlideAnimation: StackNavigationOptions = {
  transitionSpec: {
    open: {
      animation: "timing",
      config: {
        duration: 250,
        easing: Easing.inOut(Easing.ease),
      },
    },
    close: {
      animation: "timing",
      config: {
        duration: 250,
        easing: Easing.inOut(Easing.ease),
      },
    },
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export default function StackLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="jobs" component={JobsScreen} />
      <Stack.Screen
        name="messages"
        component={MessagesScreen}
        options={customSlideAnimation}
      />
      <Stack.Screen
        name="profileVisit"
        component={ProfileVisitScreen}
        options={customSlideAnimation}
      />
    </Stack.Navigator>
  );
}
