import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import CartItem from '../components/CartItem';

export default class CarritoScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.cart}/>
        <CartItem style={styles.cart} title={'Ps4'}/>
        <CartItem style={styles.cart} title={'Ps4'}/>
        <CartItem style={styles.cart} title={'Ps4'}/>
        <CartItem style={styles.cart} title={'Ps4'}/>
        </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADC1C1',
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  cart: {
    width: 350,
    height: 90,
    backgroundColor: 'white'
  }
})