import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  cardContainer: {
    backgroundColor: '#0ebcde',
    width: 300,
    height: 300,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  index: {
    position: 'absolute',
    top: 15,
    left: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  cardText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cardButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 6,
    padding:8,
    marginTop: 15
  },
  cardButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default styles;
