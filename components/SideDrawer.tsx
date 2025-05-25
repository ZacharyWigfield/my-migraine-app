import { useState } from 'react';
import { Dimensions, Pressable, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { useAuth } from 'contexts/authContext';
import { signOut } from '@react-native-firebase/auth';


const SCREEN_WIDTH = Dimensions.get('window').width;
const DRAWER_WIDTH = SCREEN_WIDTH * 0.75;

export default function SideDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const translateX = useSharedValue(-DRAWER_WIDTH);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const openDrawer = () => {
    translateX.value = withTiming(0, { duration: 300 });
    setIsOpen(true);
  };

  const closeDrawer = () => {
    translateX.value = withTiming(-DRAWER_WIDTH, { duration: 300 });
    setIsOpen(false);
  };

  const navigate = (path: string) => {
    closeDrawer();
    router.push(path);
  };

   const { auth } = useAuth();
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Error signing out:", error);
      }
    };

  return (
    <>
      <TouchableOpacity onPress={openDrawer} className="absolute top-12 left-5 z-10 bg-gray-100 p-2 rounded-md">
        <Text className="text-2xl">☰</Text>
      </TouchableOpacity>

      {/* Closes drawer when clicking outside of it */}
      {isOpen && (
        <Pressable onPress={closeDrawer} className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-10" />
      )}

      <Animated.View
        style={[animatedStyle, { width: DRAWER_WIDTH }]}
        className="absolute top-0 left-0 bottom-0 bg-white z-20 px-6 pt-28 shadow-lg"
      >
        <Text className="text-xl font-bold mb-6">Menu</Text>

        <TouchableOpacity onPress={() => navigate('/')} className="mb-4">
          <Text className="text-lg">Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('/settings')} className="mb-4">
          <Text className="text-lg">Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout} className="mb-4">
          <Text className="text-lg">Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={closeDrawer}>
          <Text className="text-lg text-red-500">Close</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}