import { AuthProvider, useAuth } from "contexts/authContext";
import { Slot } from "expo-router";
import { Redirect } from "expo-router";

function RootLayoutNav() {
  const { user, loading } = useAuth();

  if (loading) return null;

  // Show auth screens or app screens
  return <Redirect href={user ? "/(tabs)/" : "/(auth)/login"} />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
      <Slot />
    </AuthProvider>
  );
}