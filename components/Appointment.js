import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';


const AppointmentScreen = ({  }) => {
  const [name, setName] = useState( 'Harvs Agrabio ');
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState({});

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    setMarkedDates({ [day.dateString]: { selected: true } });
  };

  const handleSubmit = () => {
    alert(`Appointment booked for ${name} on ${selectedDate}`);
    // TODO: Submit appointment data to server or perform other action
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book an Appointment</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#c4c4c4"
      />
      <Calendar
        markedDates={markedDates}
        onDayPress={handleDayPress}
        style={styles.calendar}
        theme={{
          calendarBackground: '#222',
          textSectionTitleColor: '#fff',
          textSectionTitleDisabledColor: '#ccc',
          selectedDayBackgroundColor: '#E06C75',
          selectedDayTextColor: '#fff',
          todayTextColor: '#E06C75',
          dayTextColor: '#fff',
          textDisabledColor: '#ccc',
          dotColor: '#E06C75',
          selectedDotColor: '#fff',
          arrowColor: '#E06C75',
          disabledArrowColor: '#ccc',
          monthTextColor: '#fff',
          indicatorColor: '#E06C75',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '400',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '400',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
      />
      <Button
        title="Book Appointment"
        onPress={handleSubmit}
        disabled={!selectedDate}
        color="#E06C75"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff'
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#fff'
  },
  calendar: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 350,
    height: 370,
  }
  
});

export default AppointmentScreen;
