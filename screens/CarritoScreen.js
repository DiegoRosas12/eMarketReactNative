import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {View, StyleSheet, Image, Text, ScrollView, Platform} from 'react-native';
import CartItem from '../components/CartItem';

export default class CarritoScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.cart}/>
        <CartItem style={styles.cart} title={'Ps4'} proveedor={'Sony'} cantidad={1} precio={1800.50}/>
        <CartItem style={styles.cart} title={'Ps4'} proveedor={'Sony'} cantidad={1} precio={1800.50}/>
        <CartItem style={styles.cart} title={'Ps4'} proveedor={'Sony'} cantidad={1} precio={1800.50}/>
        <CartItem style={styles.cart} title={'Ps4'} proveedor={'Sony'} cantidad={1} precio={1800.50}/>
        </ScrollView>
        <View style={styles.pagar}>
          <Text style={styles.whiteText}>Pagar</Text>
        </View>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  cart: {
    backgroundColor: 'white'
  },
  whiteText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  pagar: {
    backgroundColor: '#00A210',
    position: 'absolute',
    justifyContent: 'center',
    left: 35,
    right: 35,
    bottom: 15,
    height: 60,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  }
})