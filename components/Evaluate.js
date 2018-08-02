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
import Icon from 'react-native-vector-icons/MaterialIcons';

const x = Constants.ip

function STARS(props) {

  if (props.este.state.stars == '1'){

  return (

    <View style={styles.headerbar}>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '1'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '2'})}>
        <Icon name="star-border" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '3'})}>
        <Icon name="star-border" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '4'})}>
        <Icon name="star-border" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '5'})}>
        <Icon name="star-border" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
    </View>
    );
  }

   if (props.este.state.stars == '2'){

  return (

    <View style={styles.headerbar}>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '1'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '2'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '3'})}>
        <Icon name="star-border" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '4'})}>
        <Icon name="star-border" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '5'})}>
        <Icon name="star-border" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
    </View>
    );
  }

     if (props.este.state.stars == '3'){

  return (

    <View style={styles.headerbar}>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '1'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '2'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '3'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '4'})}>
        <Icon name="star-border" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '5'})}>
        <Icon name="star-border" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
    </View>
    );
  }

     if (props.este.state.stars == '4'){

  return (

    <View style={styles.headerbar}>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '1'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '2'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '3'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '4'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '5'})}>
        <Icon name="star-border" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
    </View>
    );
  }



  else {
    return (
      <View style={styles.headerbar}>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '1'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '2'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '3'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '4'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => props.este.setState({stars: '5'})}>
        <Icon name="star" color='#fff' size={50} style={{ padding:5}} />
      </TouchableOpacity>
      </View>);
  }
  }

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      evaluador_id: 3,
      rated_id: 21,
      comment: '',
      stars: 1,
    }
  }

 

  render() {

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../img/background.jpg')} style={styles.backgroundImage}>
          <View style={styles.content}>

            <View  style={{flexDirection: 'row'}}>

              <Text style={styles.logo}> Evaluar  </Text>
              <Image style={styles.logoimg} source={require('../img/whitehelmet.png')} />
            </View>

            <STARS este={this} />

            <View style={styles.inputContainer}>
               
              <TextInput underlineColorAndroid='transparent' style={styles.tituloInput} 
                placeholder='Comentario' onChangeText={ (comment) => this.setState({comment})}></TextInput>

            </View>

              <TouchableOpacity onPress={this.evaluate} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Evaluar</Text>
              </TouchableOpacity>


          </View>
        </ImageBackground>

      
      </View>
    );
  }
      evaluate = () => {

      fetch('http://'+x+':3000/ratings/insert', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rated_id: this.state.rated_id,
          evaluador_id: this.state.evaluador_id,
          stars: this.state.stars,
          comment: this.state.comment,
        })
      })

      .then((response) => response.json())
      .then((res) => {



        if (res.success === true) {

          this.props.navigation.navigate('YourChats') 

        }
        else {
          alert('not success')
        }
      })
      .done()
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
      height: 50,
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
    },
    headerbar: {

    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 15,

    //width: (Dimensions.get('window').width) - 4,
    
  },
  logoimg: {
      marginBottom: 20,
      height:50,
      width: 50
    },
})
