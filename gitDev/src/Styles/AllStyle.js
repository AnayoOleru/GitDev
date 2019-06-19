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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4, },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
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
  },
  size: {
    width: 40,
  },
  profileImage: {
    marginTop: 40,
    width: 400, 
    height: 250
  }
});
