 
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
  ImageBackground,
  Imageback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Constants from './common/ip';
import BottomBar from './common/BottomBar';

const x = Constants.ip

function SinScroll(props) {
  let personas = props.personas;
  let navigation = props.navigation
  if (personas.length>0){
    let ultimo = personas.pop()
    let user_id = ultimo[1]
  return (
      <View>
        <View style={styles.container}>
          <View style={styles.emailRow}>
            <View style={styles.emailColumn}>
              <Text style={styles.emailText}>{ultimo[0]}</Text>
            </View>
            <View style={styles.emailNameColumn}>
                <Text style={styles.emailNameText}>{ultimo[2]}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Evaluate')}>
            <Icon name="star" color='#000' size={25} style={{ padding:15}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OtherProfile', {user_id})}>
            <Icon name="account-circle" color='#000' size={25} style={{ padding:15}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('no implementado')}>
            <Icon name="chat" color='#000' size={25} style={{ padding:15}} />
          </TouchableOpacity>
        </View> 
        <View style={styles.row}>
          <View style={styles.separatorOffset} />
          <View style={styles.separator} />
        </View>


      <SinScroll personas={personas} navigation={navigation}/>

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

    fetch('http://'+x+':3000/jobs/findall', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: this.props.navigation.state.params.title,
      })
    })

    .then((response) => response.json())
    .then((res) => {    

      if (res.success === true) {
        
        //tambien hay que darlee el user_id y el name
        i = 0
        let a = this.state.ofertas;
        while (res.message[i]) {
          var lista = [res.message[i].title, res.message[i].id, res.message[i].name+' '+res.message[i].lastname]
          a.push(lista);
          i += 1
        }

        this.setState({
          ofertas: a,
        });

      }
      else {
        alert('nadie ha ofrecido para esta categoria')
      }
    })
    .done()

  }

  
  render() {
    return (
      <View style={styles.container2}>
        <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImage}>

           <View style={styles.titlebox}>
              <Icon name="view-headline" color='#000' size={25} style={{ padding:15}} />
                <View style={styles.emailRow}>
                  <View style={styles.titlebox}>
                    <Text style={styles.logo}> {this.props.navigation.state.params.title} </Text>
                  </View>
                </View>
            <Icon name="add" color='#000' size={25} style={{ padding:15}}/>
          </View> 


          <ScrollView> 
            <SinScroll navigation={this.props.navigation} personas={this.state.ofertas}/>
          </ScrollView>  

        </ImageBackground>


        <BottomBar nav={this.props.navigation}/>    
    </View>
    );
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
   goofrecer = () => {
      this.props.navigation.navigate('Ofrecer')
    }
  completeProfile = () => {
      this.props.navigation.navigate('Complete')
    }
}

const styles = StyleSheet.create({
      backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
      width: null,
      justifyContent: 'center',
    },
  container2: {
    flex: 1,
    backgroundColor: '#2896d3',
    },
  bar: {
    borderTopColor: '#9C9C9C',
    borderTopWidth: 2,
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
  },
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
    marginBottom: 1,
    alignSelf: 'center',
    marginLeft: 0,
    marginRight: 0,
    justifyContent: 'flex-start',
  }

});