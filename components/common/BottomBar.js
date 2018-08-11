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
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons';


function BottomBar(props) {

  return (

      <View style={styles.bar}>
        <TouchableOpacity onPress={() => props.nav.navigate('Search')}>
          <Icon name="search" color='#000' size={30} style={{ marginBottom: 10, marginTop: 10, marginLeft: (Dimensions.get('window').width / 15), marginRight: (Dimensions.get('window').width / 15),}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.nav.navigate('Profile')}>
          <Icon name="account-circle" color='#000' size={30} style={{ marginBottom: 10, marginTop: 10, marginLeft: (Dimensions.get('window').width / 15), marginRight: (Dimensions.get('window').width / 15)}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.nav.navigate('Ofrecer')}>
          <Icon name="add-circle-outline" color='#000' size={30} style={{ marginBottom: 10, marginTop: 10, marginLeft: (Dimensions.get('window').width / 15), marginRight: (Dimensions.get('window').width / 15)}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.nav.navigate('YourChats')}>
          <Icon name="chat" color='#000' size={30} style={{  marginBottom: 10, marginTop: 10, marginLeft: (Dimensions.get('window').width / 15), marginRight: (Dimensions.get('window').width / 15)}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('aqui hay otras opciones')}>
          <Icon name="more-vert" color='#000' size={30} style={{ marginBottom: 10, marginTop: 10, marginLeft: (Dimensions.get('window').width / 15), marginRight: (Dimensions.get('window').width / 15)}} />
        </TouchableOpacity>
      </View>
    );
  
}

export default BottomBar

const styles = StyleSheet.create({
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
  }


});
