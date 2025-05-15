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
    <View className="flex-1 justify-center items-center px-4 bg-white">
      <TextInput
        placeholder="Email"
        className="border border-gray-300 w-full mb-2 p-2 rounded"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="border border-gray-300 w-full mb-4 p-2 rounded"
        onChangeText={setPassword}
        value={password}
      />
      <Pressable className="bg-blue-500 px-4 py-2 rounded" onPress={handleLogin}>
        <Text className="text-white text-center">Login</Text>
      </Pressable>
      <Link href="/register" asChild>
        <Pressable className="bg-blue-500 px-4 py-2 rounded">
          <Text className="text-white text-center">Register</Text>
        </Pressable>
      </Link>
    </View >
  );
}