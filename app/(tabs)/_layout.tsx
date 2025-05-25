import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useAuth } from "contexts/authContext";
import Loading from "components/Loading";
import { TouchableOpacity, View, Text } from "react-native";
import SideDrawer from "components/SideDrawer";

export default function TabsLayout() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/(auth)/login");
    }
  }, [user, loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <View className="flex-1">
      <View className="w-full h-16 bg-gray-900 flex-row items-center px-4">
        <TouchableOpacity onPress={() => setIsOpen(true)}>
          <Text className="text-lightText dark:text-darkText text-xxl">☰</Text>
        </TouchableOpacity>
      </View>

      <Stack screenOptions={{ headerShown: false }} />
      
      <SideDrawer isOpen={isOpen} closeDrawer={() => setIsOpen(false)} />
    </View>
  );

}