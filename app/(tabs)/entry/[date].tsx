import { useLocalSearchParams } from "expo-router";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useForm, Controller, useWatch } from 'react-hook-form'
import { DateEntryFormData } from "types/dateEntryFormData";
import Checkbox from '@react-native-community/checkbox';

export default function DateEntryForm() {
  const { date } = useLocalSearchParams();
  const parsedDate = new Date(date as string);
  const DIET_OPTIONS: string[] = ["high sugar", "low sugar", "high salt", "low salt",
    "skipped meal", "low calorie day", "high calorie day"];
  const WEATHER_OPTIONS: string[] = ["rainy", "sunny", "hot", "cold", "dry", "humid"]
  const SEVERITY_OPTIONS: string[] = ["1", "2", "3", "4", "5"];
  const INTENSITY_OPTIONS: string[] = ["low", "medium", "high"];
  const STRESS_OPTIONS: string[] = ["low", "medium", "high"]

  const { control, handleSubmit, formState: { errors } } = useForm<DateEntryFormData>({
    defaultValues: {
      date: parsedDate,
      flareup: false,
      severity: "1",
      diet: [""],
      exerciseIntensity: "",
      exerciseHours: "",
      screentime: "",
      weather: [""],
      stressLevel: "",
      caffeine: false,
      alcohol: false,
      tobacco: false,
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
    <View className="p-4 space-y-4">
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
            render={({ field: { onChange, value } }) => (
              <View className="flex-row gap-2">
                {SEVERITY_OPTIONS.map((option) => {
                  const selected = value === option;
                  return (
                    <TouchableOpacity
                      key={option}
                      className={`px-4 py-2 rounded-full border ${selected ? "bg-red-500 text-white" : "bg-white"
                        }`}
                      onPress={() => onChange(option)}
                    >
                      <Text className={selected ? "text-white" : "text-black"}>
                        {option}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          />
        </>
      )}

      <Text>Diet:</Text>
      <Controller
        control={control}
        name="diet"
        render={({ field: { onChange, value } }) => (
          <View className="flex-row flex-wrap gap-2">
            {DIET_OPTIONS.map((option) => {
              const selected = value.includes(option);
              return (
                <TouchableOpacity
                  key={option}
                  className={`px-3 py-1 rounded-full border ${selected ? "bg-blue-500 text-white" : "bg-white"
                    }`}
                  onPress={() => {
                    const newValue = selected
                      ? value.filter((v) => v !== option)
                      : [...value, option];
                    onChange(newValue);
                  }}
                >
                  <Text>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      />

      <Text>Exercise Intensity:</Text>
      <Controller
        control={control}
        name="exerciseIntensity"
        render={({ field: { onChange, value } }) => (
          <View >
            {INTENSITY_OPTIONS.map((option) => {
              const selected = value === option;
              return (
                <TouchableOpacity
                  key={option}
                  className={`px-4 py-2 rounded-full border ${selected ? "bg-red-500 text-white" : "bg-white"
                    }`}
                  onPress={() => onChange(option)}
                >
                  <Text className={selected ? "text-white" : "text-black"}>
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}

          </View>
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
        render={({ field: { onChange, value } }) => (
          <View className="flex-row flex-wrap gap-2">
            {WEATHER_OPTIONS.map((option) => {
              const selected = value.includes(option);
              return (
                <TouchableOpacity
                  key={option}
                  className={`px-3 py-1 rounded-full border ${selected ? "bg-blue-500 text-white" : "bg-white"
                    }`}
                  onPress={() => {
                    const newValue = selected
                      ? value.filter((v) => v !== option)
                      : [...value, option];
                    onChange(newValue);
                  }}
                >
                  <Text>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      />

      <Text>Stress Level:</Text>
      <Controller
        control={control}
        name="stressLevel"
        render={({ field: { onChange, value } }) => (
          <View >
            {STRESS_OPTIONS.map((option) => {
              const selected = value === option;
              return (
                <TouchableOpacity
                  key={option}
                  className={`px-4 py-2 rounded-full border ${selected ? "bg-red-500 text-white" : "bg-white"
                    }`}
                  onPress={() => onChange(option)}
                >
                  <Text className={selected ? "text-white" : "text-black"}>
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      />

      <Text>Alcohol:</Text>
      <Controller
        control={control}
        name="alcohol"
        render={({ field: { onChange, value } }) => (
          <View >
            <Checkbox
              value={value}
              onValueChange={onChange}
            />
          </View>
        )}
      />

      <Text>Tobacco:</Text>
      <Controller
        control={control}
        name="tobacco"
        render={({ field: { onChange, value } }) => (
          <View >
            <Checkbox
              value={value}
              onValueChange={onChange}
            />
          </View>
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
    </View>
  );
}