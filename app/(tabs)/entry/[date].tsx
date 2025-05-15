import DateEntryForm from "components/DateEntryForm";
import { useLocalSearchParams } from "expo-router";
import { DateEntryFormData } from "types/dateEntryFormData";

export default function DateEntry() {
  const { date } = useLocalSearchParams();
  const initialData: Partial<DateEntryFormData> = {
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

  const onSubmit = (data: DateEntryFormData) => {
    console.log("Form submitted:", data);
    // Send data to Firebase, etc.
  };

  return (
    <DateEntryForm
      date={date as string}
      initialValues={initialData}
      onSubmit={onSubmit}
    />
  );
}