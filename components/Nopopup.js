import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ListView, ImageBackground, SectionList, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation'

function getCatName(numerocatamassiete) {
 
  numerocat = numerocatamassiete + 1
  if (numerocat == 1) {
    return 'Construccion y reparaciones';
  }
  if (numerocat == 2) {
    return 'Salud';
  }
  if (numerocat == 3) {
    return 'Limpieza y aseo';
  }
  if (numerocat == 4) {
    return 'Banca e inversiones';
  }
  if (numerocat == 5) {
    return 'Movilización';
  }
  if (numerocat == 6) {
    return 'Arriendo';
  }
  if (numerocat == 7) {
    return 'Trabajos legales';
  }
}

function Greeting(props) {
  const numero = props.numero;


  if (numero == "Construccion y reparaciones") {
      return <View style={styles.container}>
              <TouchableOpacity onPress={this.go1}>
                      <Text style={styles.item}>Reparaciones de objetos del hogar </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go2}>
                      <Text style={styles.item}>Reparaciones de exterior </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go3}>
                      <Text style={styles.item}>Arquitecto </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go4}>
                      <Text style={styles.item}>Jefe de obras</Text>
              </TouchableOpacity>
              </View>;
            }
  if (numero == "Salud") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go5}>
                      <Text style={styles.item}>Enfermera</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Medicos a domicilio</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Consultas medicas</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Auxiliares de enfermería o técnicos para personas en situación de dependencia</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Fisioterapeutas</Text>
              </TouchableOpacity>
              </View>;
            }
  if (numero == "Limpieza y aseo") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>1. Limpieza interior casas</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>2. Limpieza interior departamentos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>3. Limpieza de eventos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>4. Limpieza de tiendas</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>5. Limpieza de piscinas</Text>
              </TouchableOpacity>
              </View>;
  
  }
  if (numero == "Banca e inversiones") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Contador</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Administrador de cuentas</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Ejecutivo de cuentas </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Asesor financiero </Text>
              </TouchableOpacity>
              </View>;
            }

    if (numero == "Movilización") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Servicios de taxi</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Servicio de transporte de objetos medianos </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Servicio de transporte objetos grandes </Text>
              </TouchableOpacity>
              </View>;
            }

    if (numero == "Arriendo") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>1. Salón de eventos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>2. Casas </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>3. Departamentos </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>4. Oficinas </Text>
              </TouchableOpacity>
              </View>;
            }
    if (numero == "Trabajos legales") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>1. Abogados </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>2. Asistente legal</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>3. Prevencioncita de riesgo</Text>
              </TouchableOpacity>

              </View>;
            }
  else {
    return <View style={styles.container}>
                <Text style={styles.item}>ERROR</Text>                    
              </View>;
  }
}

export default class ImageElement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: 0,
      fondo: require('../img/img2.jpg'),
      Catgrande: 0,
      titulo: 0,
      images: [
            require('../img/img1.jpg'),
            require('../img/img2.jpg'),
            require('../img/img3.jpg'),
            require('../img/img4.jpg'),
            require('../img/img5.jpg'),
            require('../img/img6.jpg'),
            require('../img/img7.jpg'),
        ],
    }
  }

  componentWillMount() {

    this.setState({

        fondo: this.state.images[this.props.navigation.state.params.imageKey],
        titulo: this.props.navigation.state.params.imageKey,

      });
  }

    render() {

        go = () => {
          //this.props.navigation.navigate('Categories')
          let title = getCatName(this.state.fondo)

          this.props.navigation.navigate(
          'Categories',
          { title },
          );
        }

        go1 = () => {
          let title = 'Reparaciones de objetos del hogar'
          this.props.navigation.navigate(
          'Categories',
          { title },
          );
        }
        go2 = () => {
          let title = 'Reparaciones de exterior'
          this.props.navigation.navigate(
          'Categories',
          { title },
          );
        }
        go3 = () => {
          let title = 'Arquitecto'
          this.props.navigation.navigate(
          'Categories',
          { title },
          );
        }
        go4 = () => {
          let title = 'Jefe de obras'
          this.props.navigation.navigate(
          'Categories',
          { title },
          )
        }
        go5 = () => {
          let title = 'Enfermera'
          this.props.navigation.navigate(
          'Categories',
          { title },
          );
        }
        
        return (
            <ImageBackground source={this.state.fondo} style={styles.image}>
              <ScrollView>
                <View style={styles.container}>
                  <Text style={styles.logo}>{getCatName(this.state.titulo)}</Text>
                    
                    <Greeting numero={getCatName(this.state.titulo)} />


                  </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    logo:{
      color:'#000',
      fontSize:30,
      margin:10,
      marginLeft:20,
      fontWeight:'500',
    },
    container: {
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.2)',
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: '#c3c3c3',
    },
    item: {
      fontWeight: 'bold',
      padding: 10,
      fontSize: 18,
      height: 44,
      color: '#000'
      
    },
});
