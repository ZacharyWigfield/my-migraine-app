import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import "global.css"
import CalendarView from "components/CalendarView";

// landing page once a user is authenticated. Default landing page if a user is already signed in

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold mb-4">Health Tracker</Text>
      <Text>Select a date to log health factors</Text>
      <CalendarView />
    </View>
  );
}