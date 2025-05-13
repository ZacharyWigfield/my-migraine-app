import { useLocalSearchParams } from "expo-router";
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useForm, Controller, useWatch } from 'react-hook-form'
import { DateEntryFormData } from "types/dateEntryFormData";
import Checkbox from "expo-checkbox";
import { MultiSelectChips } from "components/MultiSelectChips"
import { SingleSelectChips } from "components/SingleSelectChips";

export default function DateEntryForm() {
  const { date } = useLocalSearchParams();
  const parsedDate = new Date(date as string);
  const DIET_OPTIONS: string[] = ["high sugar", "low sugar", "high salt", "low salt",
    "skipped meal", "low calorie day", "high calorie day"];
  const WEATHER_OPTIONS: string[] = ["rainy", "sunny", "hot", "cold", "dry", "humid"]
  const SEVERITY_OPTIONS: string[] = ["1", "2", "3", "4", "5"];
  const INTENSITY_OPTIONS: string[] = ["none", "low", "medium", "high"];
  const STRESS_OPTIONS: string[] = ["none", "low", "medium", "high"];
  const CAFFEINE_OPTIONS: string[] = ["none", "low", "medium", "high"];
  const ALCOHOL_OPTIONS: string[] = ["none", "low", "medium", "high"];
  const TOBACCO_OPTIONS: string[] = ["none", "low", "medium", "high"];


  const { control, handleSubmit, formState: { errors } } = useForm<DateEntryFormData>({
    defaultValues: {
      date: parsedDate,
      flareup: false,
      severity: "1",
      diet: [],
      exerciseIntensity: "none",
      exerciseHours: "",
      screentime: "",
      weather: [],
      stressLevel: "none",
      caffeine: "none",
      alcohol: "none",
      tobacco: "none",
      sleep: "",
      notes: "",
    },
  });

  const flareup = useWatch({
    control,
    name: "flareup",
  });

  const onSubmit = (data: DateEntryFormData) => {
    console.log("Form submitted:", data);
    // Send data to Firebase, etc.
  };

  return (
    <ScrollView className="p-4 space-y-4">
      <Text className="text-lg font-bold mb-2">Entry for {date}</Text>

      <Text>Flare-up:</Text>
      <Controller
        control={control}
        name="flareup"
        render={({ field: { onChange, value } }) => (
          <View>
            <Checkbox
              value={value}
              onValueChange={onChange}
            />
          </View>
        )}
      />

      {/* conditionally render severity only if flareup is checked */}
      {flareup && (
        <>
          <Text>Severity:</Text>
          <Controller
            control={control}
            name="severity"
            render={({ field }) => (
              <SingleSelectChips
                options={SEVERITY_OPTIONS}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </>
      )}

      <Text>Diet:</Text>
      <Controller
        control={control}
        name="diet"
        render={({ field }) => (
          <MultiSelectChips
            options={DIET_OPTIONS}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Text>Exercise Intensity:</Text>
      <Controller
        control={control}
        name="exerciseIntensity"
        render={({ field }) => (
          <SingleSelectChips
            options={INTENSITY_OPTIONS}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Text>Exercise Hours:</Text>
      <Controller
        control={control}
        name="exerciseHours"
        render={({ field: { onChange, value } }) => (
          <View >
            <TextInput
              value={value}
              onChangeText={(text) => {
                // Allow only a single digit 1-9
                if (/^[1-9]$/.test(text) || text === '') {
                  onChange(text);
                }
              }}
              keyboardType="number-pad"
              maxLength={1}
            />
          </View>
        )}
      />

      <Text>Screen Time:</Text>
      <Controller
        control={control}
        name="screentime"
        render={({ field: { onChange, value } }) => (
          <View >
            <TextInput
              value={value}
              onChangeText={(text) => {
                // Allow only a single digit 1-9
                if (/^[1-9]$/.test(text) || text === '') {
                  onChange(text);
                }
              }}
              keyboardType="number-pad"
              maxLength={1}
            />
          </View>
        )}
      />

      <Text>Weather:</Text>
      <Controller
        control={control}
        name="weather"
        render={({ field }) => (
          <MultiSelectChips
            options={WEATHER_OPTIONS}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Text>Stress Level:</Text>
      <Controller
        control={control}
        name="stressLevel"
        render={({ field }) => (
          <SingleSelectChips
            options={STRESS_OPTIONS}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Text>Caffeine:</Text>
      <Controller
        control={control}
        name="caffeine"
        render={({ field }) => (
          <SingleSelectChips
            options={CAFFEINE_OPTIONS}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Text>Alcohol:</Text>
      <Controller
        control={control}
        name="alcohol"
        render={({ field }) => (
          <SingleSelectChips
            options={ALCOHOL_OPTIONS}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Text>Tobacco:</Text>
      <Controller
        control={control}
        name="tobacco"
        render={({ field }) => (
          <SingleSelectChips
            options={TOBACCO_OPTIONS}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Text>Sleep:</Text>
      <Controller
        control={control}
        name="sleep"
        render={({ field: { onChange, value } }) => (
          <View >
            <TextInput
              value={value}
              onChangeText={(text) => {
                // Allow only a single digit 1-9
                if (/^[1-9]$/.test(text) || text === '') {
                  onChange(text);
                }
              }}
              keyboardType="number-pad"
              maxLength={1}
            />
          </View>
        )}
      />

      <Button title="Save Entry" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}