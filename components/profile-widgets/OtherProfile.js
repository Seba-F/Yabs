 
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
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

import {StackNavigator} from 'react-navigation';


import Icon from 'react-native-vector-icons/MaterialIcons';




export default class Login extends React.Component {
  gosearch = () => {
      this.props.navigation.navigate('Search');
    }
  gochatlist = () => {
      this.props.navigation.navigate('Chattabs');
    }
  goprofile = () => {
      this.props.navigation.navigate('Profile');
    }
  gooptions = () => {
      this.props.navigation.navigate('Options')
    }



  render() {
    return (
      <View style = {styles.container}>

        <ImageBackground style={styles.headerbackground} source={require('../../img/background.jpg')}>

          <View style={styles.header}>
            <View style={styles.profilepicWrap}>
              <Image style={styles.profilepic} source={require('../../img/Image5.jpeg')} />
            </View>

            <Text style={styles.name}>Ignacia Eichholz</Text>
            <Text style={styles.pos}>Muy simpatica</Text>

          </View>

        </ImageBackground>


        <ScrollView>
        <View style={styles.photoGrid}>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/Image1.jpeg')} />
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/Image2.jpeg')} />
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/Image3.jpeg')} />
          </View>
          <View style={styles.photoWrap}>
            <Image style={styles.photo} source={require('../img/Image4.jpeg')} />
          </View>
          
        </View>
      </ScrollView>

        <View style={styles.bar}>
          <TouchableOpacity onPress={this.gosearch}>
            <Icon name="search" color='#000' size={30} style={{ padding:25}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goprofile}>
            <Icon name="account-circle" color='#000' size={30} style={{ padding:25}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gochatlist}>
            <Icon name="add-circle-outline" color='#000' size={30} style={{ padding:25}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gochatlist}>
            <Icon name="chat" color='#000' size={30} style={{ padding:25}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gosearch}>
            <Icon name="more-vert" color='#000' size={30} style={{ padding:25}} />
          </TouchableOpacity>
        </View>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000'
  },
  bar: {
    borderTopColor: '#9C9C9C',
    borderTopWidth: 4,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    
  },
  barseparator: {
    borderRightWidth: 4,

  },
  barItem: {
    flex: 1,
    padding: 18,
    alignItems: 'center'

  },
  barTop: {
    color: '#000',
    fontSize:20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  barBottom: {
    color: '#000',
    fontSize: 8,
    fontWeight: 'bold',
  },
  photoGrid: {

    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  photoWrap: {
    margin: 2,
    height: 200,
    width: (Dimensions.get('window').width / 2) - 4,
  },
  photo: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },
  plusview: {
    margin: 2,
    height: 200,
    width: (Dimensions.get('window').width / 2) - 4,
    backgroundColor: '#9C9C9C',
  },
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

