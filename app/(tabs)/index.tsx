import { View, Text } from "react-native";
import CalendarView from "components/CalendarView";

// landing page once a user is authenticated. Default landing page if a user is already signed in
export default function HomeScreen() {
 
  return (
    <View className="flex-1 items-center justify-center bg-lightBg dark:bg-darkBg px-4">
      <Text className="text-2xl font-bold mb-2 text-lightText dark:text-darkText">
        Health Tracker
      </Text>
      <Text className="mb-4 text-lightText dark:text-darkText">
        Select a date to log health factors
      </Text>

      <CalendarView />
    </View>
  );
}
