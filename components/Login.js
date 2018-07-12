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
  ImageBackground,
  Dimensions,
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import BottomBar from './common/BottomBar';
import Constants from './common/ip';
/*import firebase from 'firebase';*/

const x = Constants.ip

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImage}>
          <View style={styles.content}>

            <Text style={styles.logo}>- YABS -</Text>

            <View style={styles.inputContainer}>
              
              <TextInput underlineColorAndroid='transparent' style={styles.input} 
                placeholder='Numero de telefono' onChangeText={ (phone) => this.setState({phone})}>
                </TextInput>

              <TextInput secureTextEntry= {true} underlineColorAndroid='transparent' 
                style={styles.input} placeholder='password' onChangeText={ (password) => this.setState({password})}></TextInput>

            </View>

              <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.buttonContainerNarrow}
                  onPress={this.registro}>
                  <Text style={styles.registrarse} >REGISTRARSE</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonContainerNarrow}
                  onPress={this.loginanonimo}>
                  <Text style={styles.anonimo}>INGRESO ANONIMO</Text>
                </TouchableOpacity>
              </View>

          </View>
        </ImageBackground>

      
      </View>
    );
  }

  login = () => {

    fetch('http://'+x+':3000/users/obtener', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: this.state.phone,
        password: this.state.password,
      })
    })

    .then((response) => response.json())
    .then((res) => {

      

      if (res.success === true) {
        alert(res.message)
        //AsyncStorage.setItem('user', res.message)
        AsyncStorage.setItem('user', 'username')
        this.props.navigation.navigate('Profile');

      }
      else {
        alert('Usuario o contraseña invalido')
      }
    })
    .done()
    }
    
  registro = () => {
    this.props.navigation.navigate('Signin');
  }


  loginanonimo = async () => {

    AsyncStorage.setItem('user', 'Anonimo')
    this.props.navigation.navigate('Search');
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
      backgroundColor: 'rgba(255, 255, 255, 1)',
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
      padding: 20,
      borderColor: '#fff',
      borderWidth: 1,
      backgroundColor: 'rgba(255,255,255,0.6)',
      height:null,
      width:null,
      width: (Dimensions.get('window').width / 3),

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
    }
})
