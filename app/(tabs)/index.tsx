import { View, Text, Pressable } from "react-native";
import CalendarView from "components/CalendarView";
import { getAuth, signOut } from '@react-native-firebase/auth';

// landing page once a user is authenticated. Default landing page if a user is already signed in
export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Pressable className="bg-red-500 px-4 py-2 rounded" onPress={handleLogout}>
        <Text className="text-white">Logout</Text>
      </Pressable>
      <Text className="text-2xl font-bold mb-4">Health Tracker</Text>
      <Text>Select a date to log health factors</Text>
      <CalendarView />
    </View>
  );
}

async function handleLogout() {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
  }
}