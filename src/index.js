import { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import { InputReminder, RemindersList, ModalReminder } from './components';
import { styles } from './styles';

export default function App() {
  const [reminder, setReminder] = useState('');
  const [reminders, setReminders] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);
  const [borderColor, setBorderColor] = useState('#C5C9E7');

  const onHandlerFocus = () => {
    setBorderColor('#424D9E');
  };

  const onHandlerBlur = () => {
    setBorderColor('#C5C9E7');
  };

  const onHandlerChangeText = (text) => {
    setReminder(text);
  };

  const onHandlerAddReminder = () => {
    setReminders([
      ...reminders,
      {
        id: Date.now().toString(),
        value: reminder,
      },
    ]);

    setReminder('');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onHandlerModal(item)} style={styles.containerItem}>
      <Text style={styles.listItem}>{item.value}</Text>
      <Text style={styles.icon}>✅</Text>
    </TouchableOpacity>
  );

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedReminder(item);
  };

  const onHandleDelete = (id) => {
    setReminders((prevEvents) => prevEvents.filter((event) => event.id !== id));
    setIsVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputReminder
          borderColor={borderColor}
          onHandlerAddReminder={onHandlerAddReminder}
          onHandlerBlur={onHandlerBlur}
          onHandlerChangeText={onHandlerChangeText}
          onHandlerFocus={onHandlerFocus}
          reminder={reminder}
        />
        <RemindersList reminders={reminders} renderItem={renderItem} />
      </View>
      <ModalReminder
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        selectedReminder={selectedReminder}
        onHandleDelete={onHandleDelete}
      />
    </SafeAreaView>
  );
}
