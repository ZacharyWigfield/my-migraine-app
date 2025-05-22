import { TouchableOpacity, View, Text } from "react-native";

type MultiSelectChipsProps = {
  options: string[];
  value: string[];
  onChange: (newValue: string[]) => void;
};

export function MultiSelectChips({ options, value, onChange }: MultiSelectChipsProps) {
  return (
    <View className="flex-row flex-wrap gap-2">
      {options.map((option) => {
        const selected = value.includes(option);
        return (
          <TouchableOpacity
            key={option}
            className={`
              px-3 py-1 rounded-full border
              ${selected ? "bg-accent" : "bg-mainGray"}
              `}
            testID={`chip-${option}${selected ? '-selected' : ''}`}
            onPress={() => {
              const newValue = selected
                ? value.filter((v) => v !== option)
                : [...value, option];
              onChange(newValue);
            }}
          >
            <Text className={`lightText`}>
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}