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
      rut: '195134570',
      categoria: 'categoriaejemplo',
      titulo: 'nuevo titulo por defecto',
      descripcion: 'breve descripcion de la maravilla que se ofrece',
    }
  }

  create = () => {

    fetch('http://'+x+':3000/jobs/insert', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rut: this.state.rut,
        categoria: this.state.categoria,
        titulo: this.state.titulo,
        descripcion: this.state.descripcion,
        
      })
    })

    .then((response) => response.json())
    .then((res) => {



      if (res.success === true) {
        //alert(res.message)
        alert('Se ha publicado tu oferta')
        //this.props.navigation.navigate('Profile');


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

            <Text style={styles.logo}>- Offer -</Text>

            <View style={styles.inputContainer}>
               

              <Picker
                style={styles.pickerstyle}
                selectedValue={this.state.categoria}
                onValueChange={(itemValue, itemIndex) => this.setState({categoria: itemValue})}>
                <Picker.Item label="Seleccione una categoria" value="seleccione una categoria" />
                <Picker.Item label="Arquitecto" value="Arquitecto" />
                <Picker.Item label="Enfermera" value="Enfermera" />
              </Picker>

              <TextInput underlineColorAndroid='transparent' style={styles.tituloInput} 
                placeholder='Titulo' onChangeText={ (titulo) => this.setState({titulo})}></TextInput>

              <TextInput underlineColorAndroid='transparent' style={styles.descripcionInput} 
                placeholder='Enter here the content you´d like to offer' onChangeText={ (descripcion) => this.setState({descripcion})}></TextInput>

            </View>

              <TouchableOpacity onPress={this.create} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>offer</Text>
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
    tituloInput: {
      fontSize: 16,
      height: 50,
      padding: 10,
      marginBottom: 10,
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },  
    pickerstyle: {
      height: 50,
      padding: 10,
      marginBottom: 10,
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },      
    descripcionInput: {
      fontSize: 16,
      height: 100,
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
