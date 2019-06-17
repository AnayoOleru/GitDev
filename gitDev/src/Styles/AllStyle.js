import {StyleSheet} from 'react-native';
import { bold } from 'ansi-colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  searchBox: {
    borderColor: '#000000', 
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#f2f5f9',
    marginTop: 20,
    marginBottom: 0,
    width: 350,
    height: 50,
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    borderBottomColor: '#FFFFFF', 
    // borderBottomWidth: 50,
  },
  userDetailContainer: {
    marginBottom:100,
  },
  userName: {
    marginTop: 30,
    fontWeight: 'bold',
  }
});
