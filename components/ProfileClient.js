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
  ImageBackground

} from 'react-native';

import {StackNavigator} from 'react-navigation';

import Header from './profile-widgets/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'Anonimo',
    }
  }

  gosearch = () => {
      this.props.navigation.navigate('Search');
    }
  gochatlist = () => {
    this.props.navigation.navigate('YourChats');
    }
  goprofile = () => {
      this.props.navigation.navigate('Profile');
    }
  gooptions = () => {
      this.props.navigation.navigate('Ofrecer')
    } // no se para que era esto
   goofrecer = () => {
      this.props.navigation.navigate('Ofrecer')
    }
  completeProfile = () => {
      this.props.navigation.navigate('Complete')
    }

  componentWillMount() {
    this.loadusername();
    }

  changemode = () => {
    this.props.navigation.navigate('ProfileWorker')
    }

  gohistory =() => {
    this.props.navigation.navigate('ContractedHistory')
  }

  async loadusername() {
    

    try {
      const user = await AsyncStorage.getItem('user');      

      if (user != null){
        this.setState({
        username: user,
      
      });
      }
      

    } catch (e) {
      console.log('Error fetching user', e);
      this.setState({
          username: 'Cristian',
        });
    }
  }

  render() {
    return (
      <View style = {styles.container2}>
        <ScrollView>
        <ImageBackground style={styles.headerbackground} source={require('../img/background.jpg')}>
          <View style={styles.header}>
            <View style={styles.headerbar}>

              <View style={styles.profileextraWrapInvisible}>

              </View>

              <View style={styles.profilepicWrap}>
                <Image style={styles.profilepic} source={require('../img/eminem.jpg')} />
              </View>

              <View style={styles.profileextraWrap}>
                <TouchableOpacity onPress={this.changemode}>
                  <Image style={styles.changemode} source={require('../img/redhelmet.png')} />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.name}>{this.state.username}</Text>

            <View style={styles.headerbar}>
              <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
              <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
              <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
              <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
              <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
            </View>
          
          </View>

        </ImageBackground>

        <View style={styles.information}>
            <View style={styles.container}>
              <View style={styles.iconRow}>
                  <Icon name="person" color='black' size={25} style={{ padding:15, }} />
              </View>
              <View style={styles.emailRow}>
                <View style={styles.emailColumn}>
                  <Text style={styles.emailText}>{'Lastname'}</Text>
                </View>
                <View style={styles.emailNameColumn}>
                    <Text style={styles.emailNameText}>{"Apellido"}</Text>
                </View>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.iconRow}>
                  <Icon name="phone" color='black' size={25} style={{ padding:15, }} />
              </View>
              <View style={styles.emailRow}>
                <View style={styles.emailColumn}>
                  <Text style={styles.emailText}>{'77675433'}</Text>
                </View>
                <View style={styles.emailNameColumn}>
                    <Text style={styles.emailNameText}>{"Telefono"}</Text>
                </View>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.iconRow}>
                  <Icon name="photo" color='black' size={25} style={{ padding:15, }} />
              </View>
              <View style={styles.emailRow}>
                <View style={styles.emailColumn}>
                  <Text style={styles.emailText}>{'Metropolitana'}</Text>
                </View>
                <View style={styles.emailNameColumn}>
                    <Text style={styles.emailNameText}>{"Region"}</Text>
                </View>
              </View>
            </View>


            <View style={styles.row}>
              <View style={styles.separatorOffset} />
              <View style={styles.separator} />
            </View>

            <View style={styles.container}>
              <View style={styles.iconRow}>
                <Icon name="history" color='black' size={25} style={{ padding:15, }} />
              </View>
                <View style={styles.emailRow}>
                  <TouchableOpacity onPress={this.gohistory}>
                    <View style={styles.emailColumn}>
                      <Text style={styles.emailText}>{'Trabajos contratados'}</Text>
                    </View>
                    <View style={styles.emailNameColumn}>
                      <Text style={styles.emailNameText}>{"Historial"}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
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
          <TouchableOpacity onPress={this.goofrecer}>
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
  row: {
    flexDirection: 'row',
  },
  separatorOffset: {
    flex: 2,
    flexDirection: 'row',
  },
  separator: {
    flex: 8,
    flexDirection: 'row',
    borderColor: '#EDEDED',
    borderWidth: 0.8,
  },
  information: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 0,
    backgroundColor: '#fff',
    marginBottom: 25,

  },
  emailColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  emailIcon: {
    color: '#01C89E',
    fontSize: 30,
  },
  emailNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  emailNameText: {
    color: '#8E8E93',
    fontSize: 14,
    fontWeight: '200',
  },
  emailRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emailText: {
    color: 'black',
    fontSize: 16,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
  profileextraWrap: {

    width: 57,
    height: 57,
    borderRadius: 55,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 2,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  changemode: {
      marginBottom: 5,
      height:40,
      width: 40
  },
  profileextraWrapInvisible: {

    width: 100,
    height: 100,
    borderRadius: 55,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 2,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    flex:1,
    backgroundColor: '#fff'
  },
  bar: {
    borderTopColor: '#9C9C9C',
    borderTopWidth: 2,
    backgroundColor: '#fff',
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
  //header
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
    marginTop: 5,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  pos: {
    fontSize: 14,
    color: '#0394c0',
    fontWeight: '300',
    fontStyle: 'italic'
  },
  headerbar: {

    flexDirection: 'row',
    alignSelf: 'center',

    //width: (Dimensions.get('window').width) - 4,
    
  },

});

