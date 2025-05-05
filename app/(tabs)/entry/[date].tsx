import { useLocalSearchParams } from "expo-router";
import { Text, TextInput, Pressable, Alert, ScrollView } from "react-native";
import { useState } from "react";

export default function HealthForm() {
  const { date } = useLocalSearchParams();
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    // Replace with Firebase logic
    Alert.alert("Saved", `Entry for ${date}:\n${notes}`);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }} className="bg-white">
      <Text className="text-lg font-bold mb-2">Entry for {date}</Text>

      <Text className="mb-1">How did you feel today?</Text>
      <TextInput
        className="border border-gray-300 rounded p-2 mb-4"
        placeholder="Describe symptoms, mood, energy..."
        multiline
        value={notes}
        onChangeText={setNotes}
      />

      <Pressable onPress={handleSubmit} className="bg-blue-500 rounded p-3">
        <Text className="text-white text-center">Save Entry</Text>
      </Pressable>
    </ScrollView>
  );
}