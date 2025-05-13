import { TouchableOpacity, View, Text } from "react-native";

type SingleSelectChipsProps = {
    options: string[];
    value: string;
    onChange: (newValue: string) => void;
};

export function SingleSelectChips({ options, value, onChange }: SingleSelectChipsProps) {
    return (
        <View className="flex-row flex-wrap gap-2">
            {options.map((option) => {
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
    );
}