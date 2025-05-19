import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";
import { useColorScheme } from "react-native";


export default function CalendarView() {
    const today: string = new Date().toLocaleDateString('en-CA')
    const [selected, setSelected] = useState(today);
    const colorScheme = useColorScheme();
    const calendarTheme = colorScheme === 'dark' ? {
        backgroundColor: '#1e1e1e',
        calendarBackground: '#1e1e1e',
        textSectionTitleColor: '#cccccc',
        dayTextColor: '#e0e0e0',
        todayTextColor: '#82d4bb', // accent for today
        selectedDayBackgroundColor: '#82d4bb',
        selectedDayTextColor: '#1e1e1e',
        monthTextColor: '#ffffff',
        arrowColor: '#82d4bb',
    } : {
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#333333',
        dayTextColor: '#111827',
        todayTextColor: '#2f855a',
        selectedDayBackgroundColor: '#2f855a',
        selectedDayTextColor: '#ffffff',
        monthTextColor: '#111827',
        arrowColor: '#2f855a',
    };

    const handleDayPress = (day: { dateString: string }) => {
        setSelected(day.dateString)
        router.push(`/entry/${day.dateString}`);
    }

    return (
        <View className="w-full">
            <Calendar
                onDayPress={handleDayPress}
                markedDates={{
                    [selected]: { selected: true, }
                }}
                maxDate={today}
                theme={calendarTheme}
            />
        </View>
    );
}