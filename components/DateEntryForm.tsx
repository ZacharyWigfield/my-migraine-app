import { Button, ScrollView, Text, View } from "react-native";
import Slider from '@react-native-community/slider';
import { useForm, Controller, useWatch } from 'react-hook-form'
import { DateEntryFormData } from "types/dateEntryFormData";
import { MultiSelectChips } from "components/MultiSelectChips"
import { SingleSelectChips } from "components/SingleSelectChips";
import { useEffect } from "react";

export type DateEntryFormProps = {
  date: string;
  initialValues?: Partial<DateEntryFormData>;
  onSubmit: (data: DateEntryFormData) => void;
};

export default function DateEntryForm({ date, initialValues, onSubmit }: DateEntryFormProps) {
    const DIET_OPTIONS: string[] = ["high sugar", "low sugar", "high salt", "low salt",
        "skipped meal", "low calorie day", "high calorie day"];
    const WEATHER_OPTIONS: string[] = ["rainy", "sunny", "hot", "cold", "dry", "humid"]
    const SEVERITY_OPTIONS: string[] = ["1", "2", "3", "4", "5"];
    const FLAREUP_OPTIONS: string[] = ["no", "yes"]
    const INTENSITY_OPTIONS: string[] = ["none", "low", "medium", "high"];
    const STRESS_OPTIONS: string[] = ["none", "low", "medium", "high"];
    const CAFFEINE_OPTIONS: string[] = ["none", "low", "medium", "high"];
    const ALCOHOL_OPTIONS: string[] = ["none", "low", "medium", "high"];
    const TOBACCO_OPTIONS: string[] = ["none", "low", "medium", "high"];


    const { control, setValue, handleSubmit, formState: { errors } } = useForm<DateEntryFormData>({
        defaultValues: {
            date: new Date(date),
            ...initialValues
        },
    });

    const flareup = useWatch({ control, name: "flareup" });
    const exerciseHours = useWatch({ control, name: "exerciseHours" });
    const screenTime = useWatch({ control, name: "screentime" });
    const sleep = useWatch({ control, name: "sleep" });

    useEffect(() => {
        if (flareup === "no") {
            setValue("severity", "");
        }
    }, [flareup, setValue]);

    return (
        <ScrollView className="p-4 space-y-4">
            <Text className="text-lg font-bold mb-2">Entry for {date}</Text>

            <Text>Flare-up:</Text>
            <Controller
                control={control}
                name="flareup"
                render={({ field }) => (
                    <SingleSelectChips
                        options={FLAREUP_OPTIONS}
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />

            <Text>Severity:</Text>
            <Controller
                control={control}
                name="severity"
                render={({ field }) => (
                    <SingleSelectChips
                        disabled={flareup === "no"}
                        options={SEVERITY_OPTIONS}
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />

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

            <Text>Exercise Hours: {exerciseHours ?? 0}</Text>
            <Controller
                control={control}
                name="exerciseHours"
                render={({ field: { onChange, value } }) => (
                    <View >
                        <Slider
                            value={value}
                            onValueChange={onChange}
                            style={{ width: 300, height: 60 }}
                            minimumValue={0}
                            maximumValue={12}
                            step={1}
                            minimumTrackTintColor="#34D399"
                            maximumTrackTintColor="#D1D5DB"
                            thumbTintColor="#10B981"
                        />
                    </View>
                )}
            />

            <Text>Screen Time: {screenTime ?? 0}</Text>
            <Controller
                control={control}
                name="screentime"
                render={({ field: { onChange, value } }) => (
                    <View >
                        <Slider
                            value={value}
                            onValueChange={onChange}
                            style={{ width: 300, height: 60 }}
                            minimumValue={0}
                            maximumValue={12}
                            step={1}
                            minimumTrackTintColor="#34D399"
                            maximumTrackTintColor="#D1D5DB"
                            thumbTintColor="#10B981"
                        />
                    </View>
                )}
            />

            <Text>Sleep: {sleep ?? 0}</Text>
            <Controller
                control={control}
                name="sleep"
                render={({ field: { onChange, value } }) => (
                    <View >
                        <Slider
                            value={value}
                            onValueChange={onChange}
                            style={{ width: 300, height: 60 }}
                            minimumValue={0}
                            maximumValue={12}
                            step={1}
                            minimumTrackTintColor="#34D399"
                            maximumTrackTintColor="#D1D5DB"
                            thumbTintColor="#10B981"
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

            <View className="m-8">
                <Button title="Save Entry" onPress={handleSubmit(onSubmit)} />
            </View>

        </ScrollView>
    );
}