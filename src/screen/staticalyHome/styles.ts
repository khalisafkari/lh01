import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    color: '#fff',
  },
  label: {
    marginVertical: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
