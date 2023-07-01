import { useState } from 'react';
import { Text, View, Button, SafeAreaView, FlatList, Modal, TouchableOpacity } from 'react-native';

import { InputReminder } from './components';
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
        <FlatList
          data={reminders}
          renderItem={renderItem}
          style={styles.listContainer}
          contentContainerStyle={styles.list}
          alwaysBounceVertical={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal visible={isVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedReminder?.value}</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to complete?</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title="Cancel" color="#424D9E" onPress={() => setIsVisible(false)} />
            <Button
              title="Complete"
              color="green"
              onPress={() => onHandleDelete(selectedReminder?.id)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
