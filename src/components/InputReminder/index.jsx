import { Text, View, TextInput, Button } from 'react-native';

import { styles } from './styles';

const InputReminder = ({
  borderColor,
  onHandlerFocus,
  onHandlerBlur,
  onHandlerChangeText,
  onHandlerAddReminder,
  reminder,
}) => {
  return (
    <View>
      <View>
        <Text style={styles.title}>REMINDERS</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { borderColor }]}
          placeholder="Add a reminder"
          autocapitalize="none"
          autoCorrect={false}
          cursorColor="#424D9E"
          selectionColor="#D4D7ED"
          placeholderTextColor="#C5C9E7"
          onFocus={onHandlerFocus}
          onBlur={onHandlerBlur}
          onChangeText={onHandlerChangeText}
          value={reminder}
        />
        <Button
          disabled={reminder.length === 0}
          title="ADD"
          color="#424D9E"
          onPress={onHandlerAddReminder}
        />
      </View>
    </View>
  );
};

export default InputReminder;
