import { Text, View, TextInput, Button, SafeAreaView, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {

  const [event, setEvent] = useState("")
  const [events, setEvents] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [borderColor, setBorderColor] = useState("#C5C9E7")

  const onHandlerFocus = () => {
    setBorderColor("#424D9E");
  }

  const onHandlerBlur = () => {
    setBorderColor("#C5C9E7");
  }

  const onHandlerChangeText = (text) => {
    setEvent(text);
  }

  const onHandlerCreatEvent = () => {
    setEvents([
      ...events,
      {
        id: Date.now().toString(),
        value: event
      }
    ])

    setEvent("")
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onHandlerModal(item)} style={styles.containerItem} >
      <Text style={styles.listItem}>{item.value}</Text>
      <Text style={styles.icon}>OK</Text>
    </TouchableOpacity>
  )

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedEvent(item);
  }

  const onHandleDelete = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    setIsVisible(false);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>CALENDAR</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            style={[styles.input, { borderColor: borderColor }]}
            placeholder="Add an event"
            autocapitalize="none"
            autoCorrect={false}
            cursorColor="#424D9E"
            selectionColor="#D4D7ED"
            placeholderTextColor="#C5C9E7"
            onFocus={onHandlerFocus}
            onBlur={onHandlerBlur}
            onChangeText={onHandlerChangeText}
            value={event}
          />
          <Button disabled={event.length === 0} title="ADD" color="#424D9E" onPress={onHandlerCreatEvent} />
        </View>
        <View>
          <Text style={styles.nextEvents}>
            NEXT EVENTS
          </Text>
        </View>
        <FlatList 
          data={events}
          renderItem={renderItem}
          style={styles.listContainer}
          contentContainerStyle={styles.list}
          alwaysBounceVertical={false}
          keyExtractor={item => item.id}
        />
      </View>

      <Modal visible={isVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedEvent?.value}</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to complete this event?</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
            title="Cancel"
            color="#424D9E"
            onPress={() => setIsVisible(false)}
            />
            <Button 
            title="Complete"
            color="red"
            onPress={() =>onHandleDelete(selectedEvent?.id)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
