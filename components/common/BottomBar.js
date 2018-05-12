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
} from 'react-native';
import {StackNavigator} from 'react-navigation'
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

  render() {

    return (

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

    );
  }
}

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
