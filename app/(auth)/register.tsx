// app/(auth)/register.tsx
import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import { useRouter } from "expo-router";
import { useAuth } from "contexts/authContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { auth } = useAuth();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace("/"); // or navigate to dashboard/home
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center px-4 bg-lightBg dark:bg-migraineSafeBg">
      <Text className="text-2xl font-bold mb-4 text-lightText dark:text-migraineSafeText">Register</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        className="border border-mainGray w-full mb-2 p-2 rounded text-lightText dark:text-migraineSafeText bg-lightSurface dark:bg-migraineSafeSurface"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        className="border border-mainGray w-full mb-4 p-2 rounded text-lightText dark:text-migraineSafeText bg-lightSurface dark:bg-migraineSafeSurface"
        onChangeText={setPassword}
        value={password}
      />

      <Pressable
        className="bg-mainGreen px-4 py-2 rounded w-full"
        onPress={handleRegister}
      >
        <Text className="text-white text-center font-sans">Create Account</Text>
      </Pressable>
    </View>
  );
}
