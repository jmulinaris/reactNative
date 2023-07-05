import { Text, View, Modal, Button } from 'react-native';

import { styles } from './styles';

const ModalReminder = ({ isVisible, setIsVisible, selectedReminder, onHandleDelete }) => {
  return (
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
  );
};

export default ModalReminder;
