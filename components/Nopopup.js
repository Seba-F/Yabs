import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ListView, ImageBackground, SectionList, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation'

function getCatName(numerocatamas13) {
 
  numerocat = numerocatamas13 + 1
  if (numerocat == 1) {
    return 'Clases Particulares';
  }
  if (numerocat == 2) {
    return 'Exteriores';
  }
  if (numerocat == 3) {
    return 'Aseo y Hogar';
  }
  if (numerocat == 4) {
    return 'Construccion y Reparaciones';
  }
  if (numerocat == 5) {
    return 'Vehiculos';
  }
  if (numerocat == 6) {
    return 'Salud';
  }
  if (numerocat == 7) {
    return 'Cuidado y Estetica';
  }
  if (numerocat == 8) {
    return 'Vida Sana';
  }
  if (numerocat == 9) {
    return 'Animales y Mascotas';
  }
  if (numerocat == 10) {
    return 'Eventos';
  }
  if (numerocat == 11) {
    return 'Tecnologia';
  }
  if (numerocat == 12) {
    return 'Lo Hago por Ti*';
  }
  if (numerocat == 13) {
    return 'Emergencias*';
  }
}

function Greeting(props) {
  const numero = props.numero;


  if (numero == "Clases Particulares") {
      return <View style={styles.container}>
              <TouchableOpacity onPress={this.go1}>
                      <Text style={styles.item}>Basica </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go2}>
                      <Text style={styles.item}>Media </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go3}>
                      <Text style={styles.item}>PSU </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go4}>
                      <Text style={styles.item}>Universidad</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go4}>
                      <Text style={styles.item}>Musica</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go4}>
                      <Text style={styles.item}>Baile</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go4}>
                      <Text style={styles.item}>Cocina</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go4}>
                      <Text style={styles.item}>Clases Particulares: Otros</Text>
              </TouchableOpacity>
              </View>;
            }
  if (numero == "Exteriores") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go5}>
                      <Text style={styles.item}>Piscinas</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Jardines</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Riego Automatico</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Iluminacion</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Construcciones:Quinchos,Piletas,..</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Reparacion de Exteriores</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Exteriores:Otros.</Text>
              </TouchableOpacity>
              </View>;
            }
  if (numero == "Aseo y Hogar") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Departamento</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Casa</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Industrial</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Planchado</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Limpieza de Eventos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Reciclaje(GoGreen)*</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Cocina**</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Aseo y Limpieza:Otros</Text>
              </TouchableOpacity>
              </View>;
  
  }
  if (numero == "Construccion y Reparaciones") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Electricista</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Gasfiteria</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Albañileria</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Pintores</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Carpinteros</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Ampliaciones del Hogar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Construcciones Exteriores: Quinchos, Piletas,..</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Reparacion de Exteriores</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Construccion y Reparaciones:Otros</Text>
              </TouchableOpacity>
              </View>;
            }

    if (numero == "Vehiculos") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Mudanzas</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Camiones</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Buses</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Taxi</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Ambulancia</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Mecanicos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Vehiculos:Otros</Text>
              </TouchableOpacity>
              </View>;
            }

    if (numero == "Salud") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Enfermeria a Domicilio</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Medico a Domicilio</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Kinesiologia</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Ambulancia</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Masajista</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Cuidado del Adulto Mayor</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Medicina Alternativa</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Salud:Otros</Text>
              </TouchableOpacity>
              </View>;
            }
    if (numero == "Cuidado y Estetica") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Peluqueria</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Depilacion</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Maquillaje</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Manicure/Pedicure</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Cuidado de la Piel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Cuidado y Estetica:Otros</Text>
              </TouchableOpacity>
              </View>;
            }
    if (numero == "Vida Sana") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go5}>
                      <Text style={styles.item}>Preparador Fisico</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Entrenadores</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Yoga</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Nutricion</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Actividades al Aire Libre</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Arriendo de Canchas</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Vida Sana:Otros.</Text>
              </TouchableOpacity>
              </View>;
            }
      if (numero == "Animales y Mascotas") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go5}>
                      <Text style={styles.item}>Veterinario</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Paseador de Perros</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Hotel de Animales</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Peluqueria</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Animales y Mascotas:Otros</Text>
              </TouchableOpacity>
              </View>;
            }
      if (numero == "Eventos") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go5}>
                      <Text style={styles.item}>Arriendo de Equipos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Arriendo de Locales</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Limpieza de Eventos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Animador</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Banqueteria</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Cumpleaños Infantil</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>DJ.</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Carritos de Comida.</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Eventos:Otros.</Text>
              </TouchableOpacity>
              </View>;
            }
      if (numero == "Tecnologia") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go5}>
                      <Text style={styles.item}>Computadores</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Reparacion Telefonos/Tablets</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Accesorios y Repuestos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Tecnologia:Otros</Text>
              </TouchableOpacity>
              </View>;
            }
      if (numero == "Lo Hago por Ti*") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go5}>
                      <Text style={styles.item}>Adulto Mayor Para hacer colas</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Lo Hago por Ti*:Otros</Text>
              </TouchableOpacity>
              </View>;
            }
      if (numero == "Emeergencias*") {
      return <View style={styles.container}>
      <TouchableOpacity onPress={this.go5}>
                      <Text style={styles.item}>Respuesta Inmediata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.go}>
                      <Text style={styles.item}>Emergencias*:Otros</Text>
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
            require('../img/img8.jpg'),
            require('../img/img9.jpg'),
            require('../img/img10.jpg'),
            require('../img/img11.jpg'),
            require('../img/img12.jpg'),
            require('../img/img13.jpg'),

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
