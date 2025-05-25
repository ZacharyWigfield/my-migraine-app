import { useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";

type PasswordInputProps = {
    value: string;
    onChange: (val: string) => void;
};

export default function PasswordInput({ value, onChange }: PasswordInputProps) {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <View className="w-full mb-4 relative">

            <TextInput
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry={isHidden}
                className="border border-mainGray w-ful p-2 rounded text-lightText dark:text-migraineSafeText bg-lightSurface dark:bg-migraineSafeSurface"
                onChangeText={onChange}
                value={value}
            />

            <Pressable
                onPress={() => setIsHidden(!isHidden)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
            >
                <Text className="text-mainGreen font-semibold">
                    {isHidden ? "Show" : "Hide"}
                </Text>
            </Pressable>

        </View>
    );
}