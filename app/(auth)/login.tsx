// app/(auth)/login.tsx
import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useRouter } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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
      <Text className="text-2xl font-bold mb-4">Login</Text>
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
    </View>
  );
}