import { View, Text } from "react-native";

export default function Settings() {
    return (
        <View className="flex-1 items-center justify-center bg-lightBg dark:bg-darkBg px-4">
            <Text className="text-2xl font-bold mb-2 text-lightText dark:text-darkText">
                Settings
            </Text>
        </View>
    )
}