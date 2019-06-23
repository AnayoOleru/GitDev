import {StyleSheet} from 'react-native';
import { BLACK, WHITE, GREY, DARK_GRAY } from '../Constants/Constants';

export default styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 55,
    borderBottomColor: WHITE, 
  },
  userDetailContainer: {
    marginTop: 90,
    padding: 15,
    position: 'relative'
  },
  singleUserContainer: {
    marginBottom: -90,
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: -5,
  },
  userName: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  size: {
    width: 40,
  },
  profileImage: {
    marginTop: 0,
    width: 400, 
    height: 250
  },
  article: {
    padding: 25,
    marginBottom: 0,
  },
  aboutImage: {
    marginTop: 40,
    marginBottom: 0,
    width: 400, 
    height: 250
  },
  CardText: {
    textAlign: 'center',
    fontSize: 25,
  },
  CardBox: {
    backgroundColor: GREY,
    alignItems: 'center',
    justifyContent: 'center',
    width: 140, 
    height: 50
  },
  CardNumber: {
    fontSize: 25,
  },
  EachCard: {
    marginTop: 30,
  },
  BorderLine: {
    backgroundColor: GREY,
    marginTop: 30,
    width: 300,
    height: 2
  },
  button: {
    position: 'relative',
    paddingBottom: 10
  },
  ProfileContainer: {
    marginTop: 100,
  },
  infoContainer: {
    position: 'absolute',
    marginTop: 550,
    padding: 20,
  },
  userProfileName: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  EachButton: {
    backgroundColor: BLACK,
    width: 200,
    height: 50
  },
  Container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  // hr: {
  //   height: 0.3,
  //   backgroundColor: SECONDARY_COLOR,
  //   marginTop: 7,
  //   marginLeft: 0
  // },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  info: {
    paddingLeft: 15,
    flex: 1
  },
  mainText: {
    fontSize: 17
  },
  arrow: {
    width: 25,
    height: 25,
    justifyContent: 'flex-end'
  },
  profileInformation: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center'
  },
  userProfileLogin: {
    color: DARK_GRAY,
    fontSize: 20,
  },
  userProfileBio: {
    padding: 10,
    textAlign: 'center'
  }

});
