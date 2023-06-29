import { Text, View, TextInput, Button, SafeAreaView, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)
  const [borderColor, setBorderColor] = useState("#C5C9E7")

  const onHandlerFocus = () => {
    setBorderColor("#424D9E");
  }

  const onHandlerBlur = () => {
    setBorderColor("#C5C9E7");
  }

  const onHandlerChangeText = (text) => {
    setTask(text);
  }

  const onHandlerCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task
      }
    ])

    setTask("")
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onHandlerModal(item)} style={styles.containerItem} >
      <Text style={styles.listItem}>{item.value}</Text>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  )

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  }

  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setIsVisible(false);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>CALENDARIO</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            style={[styles.input, { borderColor: borderColor }]}
            placeholder="Add new task"
            autocapitalize="none"
            autoCorrect={false}
            cursorColor="#424D9E"
            selectionColor="#D4D7ED"
            placeholderTextColor="#C5C9E7"
            onFocus={onHandlerFocus}
            onBlur={onHandlerBlur}
            onChangeText={onHandlerChangeText}
            value={task}
          />
          <Button disabled={task.length === 0} title="ADD" color="#424D9E" onPress={onHandlerCreateTask} />
        </View>
        <FlatList 
          data={tasks}
          renderItem={renderItem}
          style={styles.listContainer}
          contentContainerStyle={styles.list}
          alwaysBounceVertical={false}
          keyExtractor={item => item.id}
        />
      </View>

      <Modal visible={isVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button 
            title="Cancel"
            color="#424D9E"
            onPress={() => setIsVisible(false)}
            />
            <Button 
            title="Delete"
            color="red"
            onPress={() => onHandleDelete(selectedTask?.id)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
