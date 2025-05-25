import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { useRouter } from "expo-router";
import { useAuth } from "contexts/authContext";
import PasswordInput from "components/PasswordInput";

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
    <View className="flex-1 justify-center items-center px-4 bg-lightBg dark:bg-darkBg">
      <Text className="text-2xl font-logo mb-4 text-lightText dark:text-darkText">
        Welcome Back
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        className="border border-mainGray w-full mb-2 p-2 rounded text-lightText dark:text-darkText bg-lightSurface dark:bg-darkSurface"
        onChangeText={setEmail}
        value={email}
      />

      <PasswordInput value={password} onChange={setPassword}></PasswordInput>

      <Pressable
        onPress={handleLogin}
        className="bg-mainGreen px-4 py-2 rounded w-full mb-2"
      >
        <Text className="text-white text-center font-sans">Login</Text>
      </Pressable>

      <Pressable onPress={() => router.replace('/register')} className="border border-mainGreen px-4 py-2 rounded w-full">
        <Text className="text-mainGreen text-center font-sans">Register</Text>
      </Pressable>

    </View>
  );
}
