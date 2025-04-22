import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Pressable className="bg-blue-500 px-4 py-2 rounded-xl">
                <Text className="text-white text-lg">Login</Text>
            </Pressable>
        </View>
    );
}