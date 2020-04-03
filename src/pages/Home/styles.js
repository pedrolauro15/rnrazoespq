import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#FFF',
    padding: 20
  },
  headerContainer: {
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444'
  },
  sub: {
    fontSize: 20,
    marginTop: 10,
    color: '#111',
    textAlign: 'center'
  },
  bold: {
    fontWeight: 'bold',
    color: '#000'
  },
  descriptionContainer: {
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 6
  },
  description:  {
    fontSize: 15,
    textAlign: 'justify'
  },  
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    marginTop: 10,
    borderRadius: 6,
    backgroundColor: '#0ebcde'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4,
    textAlign: 'center'
  },
  icon: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold'
  }
});

export default styles;