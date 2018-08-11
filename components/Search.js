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
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import BottomBar from './common/BottomBar';
import ImageElement from './search-widgets/ImageElement';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Login extends React.Component {

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

  state = {
        modalVisible: false,
        modalImage: require('../img/img1.jpg'),
        try: 'try',
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

    // le nombre de la funcion esta malo
    async setModalVisible(imageKey) {
        //alert(imageKey) // se les suma 7 o 6
        this.props.navigation.navigate(
          'Nopopup',
          { imageKey },
        );
    }

  render() {

    // esto es lo que se muestra en busqueda, llama a imagenes y titulos desde Imageelement
    let imagess = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key={key} 
                        onPress={() => { this.setModalVisible(key)}}> 
                        <View style={styles.photoWrap}>
                            <ImageElement imgsource={val}
                            titulo={key}></ImageElement>
                        </View>
                    </TouchableWithoutFeedback>
    });

    return (
      <View style={styles.container}>

{/*        <View style={styles.inputContainer}>
          <TextInput underlineColorAndroid='transparent' style={styles.input} 
            placeholder='Search'></TextInput>

        </View>   */}
        <ScrollView>
         <View style={styles.container3}>

             <Modal style={styles.modal} animationType={'fade'}
                    transparent={true} visible={this.state.modalVisible}
                    onRequestClose={() => {}}>
             </Modal>

             {imagess}
         </View>
        </ScrollView>


        <BottomBar nav={this.props.navigation}/>    

      </View>
    );
  }
}


const styles = StyleSheet.create({

  // Image Gallery 

  container3: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#000',
        // For iOS status bar, we need a marginTop of 20.
        marginTop: 20,
    },
    imagewrap: {
        margin: 2,
        padding: 2,
        height: (Dimensions.get('window').height/3) - 12,
        width: (Dimensions.get('window').width/2) - 4,
        backgroundColor: '#fff',
    }, 
    modal: {
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0,0,0, 0.9)'
    },
    text: { 
       color: '#fff',
    },
    photoGrid: {

      flexDirection: 'row',
      flexWrap: 'wrap',

    },
    photoWrap: {
      margin: 2,
      height: 200,
      width: (Dimensions.get('window').width / 2) - 4,
    },
    photo: {
      flex: 1,
      width: null,
      alignSelf: 'stretch'
    },

  //Search

  container: {
    flex: 1,
    backgroundColor: '#282828',

  },
  inputContainer: {
      margin: 10,
      alignSelf: 'stretch',
      padding: 20,
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
  // bottom bar
  container1: {
    marginTop: 10,
    marginLeft: 10,
    marginRight:10,
    marginBottom: 60,
    flex: 1,

  },

  header: {
    fontSize: 24,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',

  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
  },  
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  bar: {
    borderTopColor: '#9C9C9C',
    borderTopWidth: 4,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    
  },
  barseparator: {
    borderRightWidth: 4,


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



});

