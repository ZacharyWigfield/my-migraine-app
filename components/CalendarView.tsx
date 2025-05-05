import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";


export default function CalendarView() {
    const today: string = new Date().toLocaleDateString('en-CA')
    const [selected, setSelected] = useState(today);

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
            />
        </View>
    );
}