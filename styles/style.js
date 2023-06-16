import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  linkText: {
    marginTop: 16,
    color: '#FF9900',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
