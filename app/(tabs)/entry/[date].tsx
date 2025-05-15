import DateEntryForm from "components/DateEntryForm";
import { useLocalSearchParams } from "expo-router";
import { DateEntryFormData } from "types/dateEntryFormData";
import { getFirestore, doc, setDoc } from '@react-native-firebase/firestore';
import { Alert } from "react-native";
import { useAuth } from "contexts/authContext";
import { useDateEntry } from "hooks/useDateEntry";
import Loading from "components/Loading";

export default function DateEntry() {
  const { date } = useLocalSearchParams();
  const { user } = useAuth();
  const { data: initialValues, loading, error } = useDateEntry(date as string);
  const defaultData: Partial<DateEntryFormData> = {
    flareup: "no",
    severity: "",
    diet: [],
    exerciseIntensity: "none",
    exerciseHours: 0,
    screentime: 0,
    sleep: 8,
    weather: [],
    stressLevel: "none",
    caffeine: "none",
    alcohol: "none",
    tobacco: "none",
    notes: "",
  }

  const onSubmit = async (data: DateEntryFormData) => {
    try {
      await saveEntry(data);
      //replace with toast
      console.log('Entry saved!');
    } catch (e) {
      Alert.alert("Submit Failed", `Failed to save entry: ${e}`)
    }
  };

  const saveEntry = async (data: DateEntryFormData) => {
    if (!user) throw new Error("User not authenticated");

    const docId = `${user.uid}_${data.date.toISOString().split('T')[0]}`;
    const db = getFirestore();
    const ref = doc(db, 'dateEntries', docId);
    await setDoc(ref, data);
  };

  if (loading) return (
    <Loading></Loading>
  )

  return (
    <DateEntryForm
      date={date as string}
      initialValues={initialValues ? initialValues : defaultData}
      onSubmit={onSubmit}
    />
  );
}