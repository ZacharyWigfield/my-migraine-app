import { View, Text, Pressable } from "react-native";
import CalendarView from "components/CalendarView";
import { signOut } from '@react-native-firebase/auth';
import { useAuth } from "contexts/authContext";

// landing page once a user is authenticated. Default landing page if a user is already signed in
export default function HomeScreen() {
  const { auth } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-lightBg dark:bg-migraineSafeBg px-4">
      <Pressable
        className="bg-mainGreen px-4 py-2 rounded mb-4 w-full"
        onPress={handleLogout}
      >
        <Text className="text-white text-center font-sans">Logout</Text>
      </Pressable>

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
