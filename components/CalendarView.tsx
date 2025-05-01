import { useState } from "react";
import { View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";


export default function CalendarView() {
    const [selected, setSelected] = useState('');
    
    return (
        <View className="w-full">
            <Calendar
               onDayPress={(day: any) => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
              }}
            />
        </View>
    );
}