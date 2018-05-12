import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
  ScrollView,
  AsyncStorage,
} from 'react-native';

import ImageElement from './ImageElement';
import ImageElementList from './ImageElementList';
import {StackNavigator} from 'react-navigation'

export default class App extends Component {

    state = {
        modalVisible: false,
        modalImage: require('../../img/img1.jpg'),
        images: [
            require('../../img/img1.jpg'),
            require('../../img/img2.jpg'),
            require('../../img/img3.jpg'),
            require('../../img/img4.jpg'),
            require('../../img/img5.jpg'),
            require('../../img/img6.jpg'),
            require('../../img/img3.jpg'),
            require('../../img/img4.jpg'),
            require('../../img/img1.jpg'),
            require('../../img/img2.jpg'),
        ],
                images2: [
            '../../img/img2.jpg',
            '../../img/img1.jpg',
            '../../img/img1.jpg',
            '../../img/img1.jpg',
            '../../img/img1.jpg',
            '../../img/img1.jpg',
            '../../img/img1.jpg',
            '../../img/img1.jpg',
            '../../img/img1.jpg',
            '../../img/img1.jpg',

        ]
    }
    //setModalVisible = async (visible, imageKey) => {
    async setModalVisible(imageKey) {
        //alert(imageKey)
        // Esto es la foto: this.state.images[imageKey])
        // key: enumeracion de las imagenes partiendo desde cero
        //this.setState({ modalImage: this.state.images2[imageKey] });

        //await AsyncStorage.setItem('fondo', 0);
        //var value = await AsyncStorage.getItem('fondo');
 
        navigation.navigate('Nopopup');

   }




    render() {

        let imagess = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key={key} 
                        onPress={() => { this.setModalVisible(key)}}> 
                        <View style={styles.photoWrap}>
                            <ImageElement imgsource={val}></ImageElement>
                        </View>
                    </TouchableWithoutFeedback>

        });

        return (
            <ScrollView>
             <View style={styles.container}>

                 <Modal style={styles.modal} animationType={'fade'}
                        transparent={true} visible={this.state.modalVisible}
                        onRequestClose={() => {}}>

{/*                      <View style={styles.modal}>
                            <Text style={styles.text}
                                onPress={() => {this.setModalVisible(false)}}>Close</Text>
                             <ImageElementList imgsource={this.state.modalImage}></ImageElementList>
                        </View>*/}

                 </Modal>

                 {imagess}
             </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
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
    }

});



/*import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
  ScrollView,
} from 'react-native';

import ImageElement from './ImageElement';
import ImageElementList from './ImageElementList';
import {StackNavigator} from 'react-navigation'

export default class App extends Component {

    state ={
        modalVisible: false,
        modalImage: require('../../img/img1.jpg'),
        images: [
            require('../../img/img1.jpg'),
            require('../../img/img2.jpg'),
            require('../../img/img3.jpg'),
            require('../../img/img4.jpg'),
            require('../../img/img5.jpg'),
            require('../../img/img6.jpg'),
            require('../../img/img3.jpg'),
            require('../../img/img4.jpg'),
            require('../../img/img1.jpg'),
            require('../../img/img2.jpg'),

        ]
    }

    setModalVisible(visible, imageKey) {
        this.setState({ modalImage: this.state.images[imageKey] });
        this.setState({ modalVisible: visible });
    }

    goNopopup(visible, imageKey) {
        this.props.navigation.navigate('Profile');
    }

    getImage() {
       return this.state.modalIamge;
    }

    render() {

        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key={key} 
                        onPress={() => { this.setModalVisible(true, key)}}> 
                        <View style={styles.photoWrap}>

                            <ImageElement imgsource={val}></ImageElement>
                        </View>
                    </TouchableWithoutFeedback>

        });

        return (
            <ScrollView>
             <View style={styles.container}>

                 <Modal style={styles.modal} animationType={'fade'}
                        transparent={true} visible={this.state.modalVisible}
                        onRequestClose={() => {}}>

                        <View style={styles.modal}>
                            <Text style={styles.text}
                                onPress={() => {this.setModalVisible(false)}}>Close</Text>
                             <ImageElementList imgsource={this.state.modalImage}></ImageElementList>
                        </View>

                 </Modal>

                 {images}
             </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
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
    }

});
*/