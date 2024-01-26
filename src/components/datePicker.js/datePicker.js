import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {styles} from "./style";
import { Color } from '../../color/Color';

const DatePicker = ({ title, onChange }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        setSelectedDate(date);
        // Update the onChange prop with the selected date
        onChange(date);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title} </Text>
            <TouchableOpacity onPress={showDatePicker} style={styles.date}>
                <TouchableOpacity>
                    <DateTimePickerModal
                        mode='date'
                        onCancel={hideDatePicker}
                        onConfirm={handleConfirm}
                        isVisible={isDatePickerVisible}
                        buttonTextColorIOS={Color.btnColor}
                        pickerStyleIOS={{
                            backgroundColor: "#d2d2d2",
                        }}
                    />
                </TouchableOpacity>
                <View>
                    {/* Display the selected date if it's defined and is a Date object */}
                    <Text style={styles.dateText}>{selectedDate && selectedDate.toDateString()}  </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default DatePicker;
