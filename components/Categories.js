 
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

goprofile = () => {
    alert('Aqui va a navegar al perfil')
    //this.props.navigation.navigate('OtherProfile');
  }

gochatlist = () => {
  alert('Aqui va a iniciar una conversación')
    //this.props.navigation.navigate('Chattabs');
  }

// function Resultados(props) {
//   let personas = props.personas;
//   let ultimo = personas.pop()
//   if (personas.length>0){
//   return (
    
//     <ScrollView> 

//       <View style={styles.bar}>
//         <Text style={styles.people}>{ultimo}</Text>
//         <TouchableOpacity onPress={this.goprofile}>
//           <Icon name="account-circle" color='#000' size={25} style={{ padding:15}} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={this.gochatlist}>
//           <Icon name="chat" color='#000' size={25} style={{ padding:15}} />
//         </TouchableOpacity>
//       </View>
//       <SinScroll personas={personas}/>
      
//     </ScrollView>

//     );
//   }
//   else {
//     return null
//   }
//   }

function SinScroll(props) {
  let personas = props.personas;
    
  if (personas.length>0){
    let ultimo = personas.pop()
  return (

      <View>
      <View style={styles.bar}>
        <Text style={styles.people}>{ultimo}</Text>
        <TouchableOpacity onPress={this.goprofile}>
          <Icon name="account-circle" color='#000' size={25} style={{ padding:15}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.gochatlist}>
          <Icon name="chat" color='#000' size={25} style={{ padding:15}} />
        </TouchableOpacity>
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

    fetch('http://'+x+':3000/jobs/obtener', {
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
        

        i = 0
        let a = this.state.ofertas;
        while (res.message[i]) {
          a.push(res.message[i].titulo);
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
      <View>
        <Text style={styles.logo}> {this.props.navigation.state.params.title} </Text>
        <ScrollView> 
          <SinScroll personas={this.state.ofertas}/>        
        </ScrollView>         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo:{
    color:'#000',
    fontSize:40,
    margin:10,
    marginLeft:20,
    fontWeight:'500',
    padding: 20,
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

});