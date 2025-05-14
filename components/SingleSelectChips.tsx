import { TouchableOpacity, View, Text } from "react-native";

type SingleSelectChipsProps = {
    disabled?: boolean
    options: string[];
    value: string;
    onChange: (newValue: string) => void;
};

export function SingleSelectChips({ options, value, onChange, disabled = false }: SingleSelectChipsProps) {
    return (
        <View className="flex-row flex-wrap gap-2">
            {options.map((option) => {
                const selected = value === option;
                return (
                    <TouchableOpacity
                        disabled={disabled}
                        key={option}
                        onPress={() => !disabled && onChange(option)}
                        className={`px-4 py-2 rounded-full border ${selected ? "bg-red-500" : "bg-white"
                            } ${disabled ? "opacity-50" : ""}`}
                    >
                        <Text className={selected ? "text-white" : "text-black"}>
                            {option}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}