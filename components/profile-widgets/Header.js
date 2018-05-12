 
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  SectionList,
  AsyncStorage,
  ImageBackground,
  Image
} from 'react-native';


export default class Header extends React.Component {

  render() {
    return (
      <ImageBackground style={styles.headerbackground} source={require('../../img/background.jpg')}>

        <View style={styles.header}>
          <View style={styles.profilepicWrap}>
            <Image style={styles.profilepic} source={require('../../img/eminem.jpg')} />

          </View>

          <Text style={styles.name}>JOHN DOE</Text>
          <Text style={styles.pos}>APP DEVELOPER</Text>

        </View>

      </ImageBackground>

    );
  }



}


const styles = StyleSheet.create({
  headerbackground: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)'

  },
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 16,
  },
  profilepic: {
    flex:1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4,
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  pos: {
    fontSize: 14,
    color: '#0394c0',
    fontWeight: '300',
    fontStyle: 'italic'
  }

});

