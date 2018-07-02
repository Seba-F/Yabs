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
  Picker
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import Constants from './common/ip';

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

  create = () => {


    fetch('http://'+x+':3000/users/insert', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        lastname: this.state.lastname,
        phone: this.state.phone,
        password: this.state.password,
        region: this.state.region,

      })
    })

    .then((response) => response.json())
    .then((res) => {

      if (res.success === true) {
        AsyncStorage.setItem('user', this.state.name)
        this.props.navigation.navigate('Profile');

      }
      else {
        alert('not success')
      }
    })
    .done()
    }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImage}>
          <View style={styles.content}>

            <Text style={styles.logo}>- Crear usuario -</Text>

            <View style={styles.inputContainer}>
              
              <TextInput underlineColorAndroid='transparent' style={styles.input} 
                placeholder='Nombre' onChangeText={ (name) => this.setState({name})}>
                </TextInput>

              <TextInput underlineColorAndroid='transparent' style={styles.input} 
                placeholder='Apellido' onChangeText={ (lastname) => this.setState({lastname})}>
                </TextInput>

              <TextInput underlineColorAndroid='transparent' style={styles.input} 
                placeholder='Numero de telefono' onChangeText={ (phone) => this.setState({phone})}>
                </TextInput>

              <Picker
                selectedValue={this.state.region}
                style={styles.regionpicker}
                onValueChange={(region) => this.setState({region})}>
                <Picker.Item label="XV de Arica y Parinacota" value="15" />
                <Picker.Item label="I de Tarapaca" value="1" />
                <Picker.Item label="II de Antofagastaa" value="2" />
                <Picker.Item label="III de Atacama" value="3" />
                <Picker.Item label="IV de Coquimbo" value="4" />
                <Picker.Item label="V de Valparaiso" value="5" />
                <Picker.Item label="VI del Libertador General Bernardo OHiggins" value="6" />
                <Picker.Item label="VII del Maule" value="7" />
                <Picker.Item label="VIII del Bío Bío" value="8" />
                <Picker.Item label="IX de la Araucanía" value="9" />
                <Picker.Item label="XIV de los Ríos" value="14" />
                <Picker.Item label="X de los Lagos" value="10" />
                <Picker.Item label="XI Aisén del General Carlos Ibáñez del Campo" value="11" />
                <Picker.Item label="XII de Magallanes y Antártica Chilena" value="12" />
                <Picker.Item label="Metropolitana de Santiago" value="RM" />
              </Picker>

              <TextInput secureTextEntry= {true} underlineColorAndroid='transparent' 
                style={styles.input} placeholder='password' onChangeText={ (password) => this.setState({password})}>
                </TextInput>

            </View>

              <TouchableOpacity onPress={this.create} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Create</Text>
              </TouchableOpacity>

          </View>
        
        </ImageBackground>
      
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
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    regionpicker: {
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

