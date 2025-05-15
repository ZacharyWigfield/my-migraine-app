// lib/hooks/useDateEntry.ts
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "@react-native-firebase/firestore";
import { useAuth } from "contexts/authContext";
import { DateEntryFormData } from "types/dateEntryFormData";

export function useDateEntry(date: string) {
  const { user } = useAuth();
  const [data, setData] = useState<Partial<DateEntryFormData> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!user || !date) return;

    const fetch = async () => {
      try {
        const ref = doc(getFirestore(), "dateEntries", `${user.uid}_${date}`);
        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
          setData(snapshot.data() as DateEntryFormData);
        } else {
          setData(null);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [user, date]);

  return { data, loading, error };
}