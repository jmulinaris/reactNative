import { FlatList } from 'react-native';

import { styles } from './styles';

const RemindersList = ({ reminders, renderItem }) => {
  return (
    <FlatList
      data={reminders}
      renderItem={renderItem}
      style={styles.listContainer}
      contentContainerStyle={styles.list}
      alwaysBounceVertical={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RemindersList;
