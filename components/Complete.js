import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  ImageBackground
} from 'react-native';

import Constants from './common/ip';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomBar from './common/BottomBar';

const x = Constants.ip



export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      phone: '',
      password: '',
      region: '',
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
   goofrecer = () => {
      this.props.navigation.navigate('Ofrecer')
    }
  completeProfile = () => {
      this.props.navigation.navigate('Complete')
    }
  create = () => {
    alert('outch')
    }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImage}>
          <View style={styles.content}>

            <Text style={styles.logo}>- Completar perfil -</Text>          

              
              <View style={styles.inputContainer}>
              

                <View style={{flexDirection: 'row'}}>
                    <TextInput underlineColorAndroid='transparent' style={styles.input} 
                    placeholder='Rut...' onChangeText={ (name) => this.setState({name})}>
                    </TextInput>             
                    <TouchableOpacity onPress={this.create} >
                      <Icon name="file-upload" color='#000' size={40} style={{ padding:1, }} />
                    </TouchableOpacity>
                </View>
                

                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={this.create} style={styles.buttonContainerNarrow}>
                    <Text style={styles.buttonText}>Seleccionar{"\n"}Carnet Identidad</Text>
                  </TouchableOpacity>
                    <TouchableOpacity onPress={this.create} style={styles.iconcontainer}>
                      <Icon name="file-upload" color='#000' size={40} style={{ padding:1, }} />
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity onPress={this.create} style={styles.buttonContainerNarrow}>
                    <Text style={styles.buttonText}> Seleccionar{"\n"}  Antecedentes   </Text>
                  </TouchableOpacity>
                    <TouchableOpacity onPress={this.create}  style={styles.iconcontainer}>
                      <Icon name="file-upload" color='#000' size={40} style={{ padding:1, }} />
                    </TouchableOpacity>
              </View> 

              </View>

             
            </View>

            </ImageBackground>
          <BottomBar nav={this.props.navigation}/>    
      </View>                                                  

    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#2896d3',
    },
    backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
      width: null,
      justifyContent: 'center',
    },
    content: {
      alignItems: 'center',
    },
    logo: {
      color: 'white',
      fontSize: 40,
      fontStyle: 'italic',
      fontWeight: 'bold',
      textShadowColor: '#252525',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 15,
      marginBottom: 20,
    },
    inputContainer: {
      margin: 20,
      alignSelf: 'stretch',
      padding: 20,
      marginBottom: 0,
      borderColor: '#fff',
      paddingBottom: 10,
      borderWidth: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    input: {
      fontSize: 16,
      height: 40,
      padding: 10,
      marginBottom: 10,
      marginRight: 30,
      marginLeft: 20,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      width: 140,
    },
    buttonContainer: {
      margin: 20,
      alignSelf: 'stretch',
      padding: 20,
      borderColor: '#fff',
      borderWidth: 1,
      backgroundColor: 'rgba(255,255,255,0.6)',
      marginBottom: 0
    },
    buttonText:{
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    buttonContainerNarrow: {
      height: 40,
      margin: 20,
      alignSelf: 'stretch',
      padding: 10,
      marginRight: 0,
      borderColor: '#fff',
      borderWidth: 1,
      backgroundColor: 'rgba(255,255,255,0.6)',
      height:null,
      width:null,
    },
    iconcontainer: {
      height: 40,
      margin: 10,
      alignSelf: 'stretch',
      padding: 20,
      borderColor: 'rgba(255,255,255,0)',
      borderWidth: 1,
      backgroundColor: 'rgba(255,255,255,0)',
      height:null,
      width:null,


    },
    registrarse: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    anonimo: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    bar: {
    borderTopColor: '#9C9C9C',
    borderTopWidth: 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    
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
})

