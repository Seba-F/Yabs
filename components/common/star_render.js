import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function StarRender(props) {

  if (props.stars < 1.5){
    return (
      <View style={styles.headerbar}>
          <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star-border" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star-border" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star-border" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star-border" color='#fff' size={20} style={{ padding:5}} />
      </View>
      );
    }

  if (props.stars < 2.5){
    return (
      <View style={styles.headerbar}>
          <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star-border" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star-border" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star-border" color='#fff' size={20} style={{ padding:5}} />
      </View>
      );
    }

  if (props.stars < 3.5){
    return (
      <View style={styles.headerbar}>
          <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star-border" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star-border" color='#fff' size={20} style={{ padding:5}} />
      </View>
      );
    }

  if (props.stars < 4.5){
    return (
      <View style={styles.headerbar}>
          <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
          <Icon name="star-border" color='#fff' size={20} style={{ padding:5}} />
      </View>
      );
    }

  else {
    return (
      <View style={styles.headerbar}>
        <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
        <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
        <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
        <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
        <Icon name="star" color='#fff' size={20} style={{ padding:5}} />
      </View>
      );
    }
  }

export default StarRender

const styles = StyleSheet.create({
  headerbar: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

