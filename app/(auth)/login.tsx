// app/(auth)/login.tsx
import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { Link, useRouter } from "expo-router";
import { useAuth } from "contexts/authContext";

// landing page for a user who isn't signed in. Default page when a user is not authorized
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { auth } = useAuth();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/"); // navigate to home or dashboard
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center px-4 bg-lightBg dark:bg-migraineSafeBg">
      <Text className="text-2xl font-logo mb-4 text-lightText dark:text-migraineSafeText">
        Welcome Back
      </Text>

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
        onPress={handleLogin}
        className="bg-mainGreen px-4 py-2 rounded w-full mb-2"
      >
        <Text className="text-white text-center font-sans">Login</Text>
      </Pressable>

      <Link href="/register" asChild>
        <Pressable className="border border-mainGreen px-4 py-2 rounded w-full">
          <Text className="text-mainGreen text-center font-sans">Register</Text>
        </Pressable>
      </Link>
    </View>
  );
}
