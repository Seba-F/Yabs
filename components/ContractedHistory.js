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
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Constants from './common/ip';

const x = Constants.ip

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

function SinScroll(props) {
  let personas = props.personas;
  let navigation = props.navigation
    
  if (personas.length>0){
    let ultimo = personas.pop()
  return (

      <View>
        <View style={styles.container}>
          <View style={styles.emailRow}>
            <View style={styles.emailColumn}>
              <Text style={styles.emailText}>{ultimo}</Text>
            </View>
            <View style={styles.emailNameColumn}>
                <Text style={styles.emailNameText}>{"Arreglo de lavaplatos"}</Text>
            </View>
          </View>
          <Text style={styles.qualificationText}>{"4.5"}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('OtherProfile')}>
            <Icon name="account-circle" color='#000' size={25} style={{ padding:15}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <Icon name="chat" color='#000' size={25} style={{ padding:15}} />
          </TouchableOpacity>
        </View> 
        <View style={styles.row}>
          <View style={styles.separatorOffset} />
          <View style={styles.separator} />
        </View>


      <SinScroll personas={personas}/>

      </View>

    );
  }
  else {
    return null
  }
  }

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ofertas: [],
    }
  }

  componentDidMount() {

    let a = ['Miguel Torres'];
    this.setState({
      ofertas: a,
    });
  }

  render() {
    return (
      <View>
           <View style={styles.titlebox}>
              <View style={styles.emailRow}>
                <View style={styles.titlebox}>
                  <Text style={styles.logo}> {'Trabajos Contratados'} </Text>
                </View>
              </View>
          </View> 

        <ScrollView> 
          <SinScroll navigation={this.props.navigation} personas={this.state.ofertas}/> 
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
  bar: {
    borderTopColor: '#9C9C9C',
    borderTopWidth: 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    
  },
  separator: {
    flex: 8,
    flexDirection: 'row',
    borderColor: '#EDEDED',
    borderWidth: 0.8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 0,
    backgroundColor: '#fff',
  },
  emailColumn: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  emailNameColumn: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  emailNameText: {
    color: '#8E8E93',
    fontSize: 14,
    fontWeight: '200',
  },
  qualificationText: {
    color: 'black',
    fontSize: 22,
    alignSelf: 'center',
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
  logo:{
    fontSize:20,
    color: 'black',
    fontWeight:'500',
    padding: 5,
    marginTop: 15,
    alignSelf: 'center',

  },
  bar: {
    borderTopColor: '#9C9C9C',
    borderTopWidth: 2,
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
  },
  people:{
    color:'#000',
    fontSize:25,
    padding: 10,
  },
  titlebox:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 5,
    alignSelf: 'center',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'flex-start',
  }

});