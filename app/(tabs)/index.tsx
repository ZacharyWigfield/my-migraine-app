import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import "global.css"

// landing page once a user is authenticated. Default landing page if a user is already signed in

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold mb-4">Migraine Tracker</Text>
      <Link href="/log-day" asChild>
        <Pressable className="bg-blue-500 px-4 py-2 rounded-xl">
          <Text className="text-white text-lg">Log Today</Text>
        </Pressable>
      </Link>
    </View>
  );
}