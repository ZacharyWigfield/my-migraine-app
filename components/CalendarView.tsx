import { useState } from "react";
import { View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";


export default function CalendarView() {
    const today: string = new Date().toLocaleDateString('en-CA')
    const [selected, setSelected] = useState(today);

    return (
        <View className="w-full">
            <Calendar
                onDayPress={(day: any) => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}
                maxDate={today}
            />
        </View>
    );
}