import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "contexts/authContext";
import Loading from "components/Loading";

//rendered before any route. Initialization code goes here
export default function AuthLayout() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/(tabs)/");
    }
  }, [user, loading]);

  if (loading || user) {
    return <Loading></Loading>
  } else {
    return <Stack />;
  }

}
