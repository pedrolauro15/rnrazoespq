import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 15
  },
  box: {
    backgroundColor: '#0ebcde',
    padding: 10,
    marginBottom: 10
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#FFF'
  },

  boxDescription: {
    fontSize: 15,
    textAlign: 'justify',
    color: '#FFF'
  }
});

export default styles;