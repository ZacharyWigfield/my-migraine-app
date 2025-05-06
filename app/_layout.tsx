import { AuthProvider, useAuth } from "contexts/authContext";
import { Slot, useRouter } from "expo-router";
import { useEffect } from "react";
import  firebase from '@react-native-firebase/app';

//rendered before any route. Initialization code goes here

function RootLayoutNav() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      // Navigate based on user auth state
      if (user) {
        router.replace("/(tabs)/");
      } else {
        router.replace("/(auth)/login");
      }
    }
  }, [user, loading]);

  return null; // hit when loading is true, may add loading screen later
}

// AuthProvider is a context we wrap the entire application in. This listens to firebase
// and lets us know if a user is logged in or not. This is used above to control routing
export default function RootLayout() {
  console.log('from layout file: Firebase initialized apps:', firebase.apps);
  return (
    <AuthProvider>
      <RootLayoutNav />
      <Slot />
    </AuthProvider>
  );
}