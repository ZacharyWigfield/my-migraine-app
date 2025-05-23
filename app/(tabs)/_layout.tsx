import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "contexts/authContext";
import Loading from "components/Loading";

export default function TabsLayout() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/(auth)/login");
    }
  }, [user, loading]);

  if (loading || user) {
    return <Loading></Loading>
  } else {
    return <Stack />;
  }

}