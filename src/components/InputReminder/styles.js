import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    color: '#424D9E',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 0.95,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#212121',
    borderColor: '#424D9E',
    fontSize: 14,
  },
});

export default styles;
