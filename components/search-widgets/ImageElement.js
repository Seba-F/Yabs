import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SectionList } from 'react-native';

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
//getCatName(this.props.titulo)
export default class ImageElement extends Component {
    render() {
        return (

            <ImageBackground source={this.props.imgsource} style={styles.image}>
              <View style={styles.TextContainer}>
                <Text style={styles.logo}>{getCatName(this.props.titulo)}</Text>
              </View>
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
    TextContainer: {

      borderColor: '#fff',
      borderWidth: 1,
      backgroundColor: 'rgba(255,255,255,0.6)',
      margin: 0
    },
    logo:{
      color:'#000',
      fontSize:25,
      margin:10,
      marginLeft:20,
      fontWeight:'500',
  },

});
