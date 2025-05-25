import { View, Text } from "react-native";
import CalendarView from "components/CalendarView";
import SideDrawer from "components/SideDrawer";

// landing page once a user is authenticated. Default landing page if a user is already signed in
export default function HomeScreen() {
 
  return (
    <View className="flex-1 items-center justify-center bg-lightBg dark:bg-migraineSafeBg px-4">
      <SideDrawer></SideDrawer>
      <Text className="text-2xl font-bold mb-2 text-lightText dark:text-migraineSafeText">
        Health Tracker
      </Text>
      <Text className="mb-4 text-lightText dark:text-migraineSafeText">
        Select a date to log health factors
      </Text>

      <CalendarView />
    </View>
  );
}
