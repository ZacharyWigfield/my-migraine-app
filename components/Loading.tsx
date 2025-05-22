import { ActivityIndicator, View } from 'react-native';
import { useColorScheme } from "react-native";

const colorScheme = useColorScheme();

export default function LoadingSpinner() {
  return (
    <View className="flex-1 justify-center items-center bg-lightBg dark:bg-migraineSafeBg">
      <ActivityIndicator size="large" color={colorScheme === "dark" ? "#E0E0E0" : "#111827"} />
    </View>
  );
}