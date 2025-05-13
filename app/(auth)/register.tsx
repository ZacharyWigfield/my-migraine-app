// app/(auth)/register.tsx
import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth'; 
import { useRouter } from "expo-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace("/"); // or navigate to dashboard/home
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center px-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Register</Text>
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
      <Pressable className="bg-blue-500 px-4 py-2 rounded" onPress={handleRegister}>
        <Text className="text-white text-center">Create Account</Text>
      </Pressable>
    </View>
  );
}
