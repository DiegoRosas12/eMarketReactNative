import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {View, StyleSheet, Image, Text, ScrollView, Platform, AsyncStorage, RefreshControl} from 'react-native';
import CartItem from '../components/CartItem';

export default class CarritoScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  
  constructor(props){
    super(props);
      this.state ={
        productos: [],
        refreshing: false,
      };
    this.setProductos();
  }

  setProductos(){
    fetch("http://192.168.1.104:3001/carritos/carrito/user1")
      .then(response => response.json())
      .then(productos => this.setState({productos}))
      .catch(error => {
        console.error(error);
      });
  }

  _onRefresh = () => {
    this.setState({refreshing: true});

    fetch("http://192.168.1.104:3001/carritos/carrito/user1")
      .then(response => response.json())
      .then(productos => this.setState({productos}))
      .then(() => {
        this.setState({refreshing: false});
      })
      .catch(error => {
              console.error(error);
            });
  }
  
  render() {

    return (
        <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
          >
        <View style={styles.cart}/>
        {this.state.productos.map(producto => (
          <CartItem key={producto.producto_id} producto_id={producto.producto_id} user_id ={1} style={styles.cart} title={producto.nombre} proveedor={producto.username} cantidad="" precio={producto.precio} />
        ))}
        {/* <CartItem style={styles.cart} title={'ps4'} proveedor={'Sony'} cantidad={1} precio={1800.50}/>
        <CartItem style={styles.cart} title={'Ps4'} proveedor={'Sony'} cantidad={1} precio={1800.50}/>
        <CartItem style={styles.cart} title={'Ps4'} proveedor={'Sony'} cantidad={1} precio={1800.50}/>
        <CartItem style={styles.cart} title={'Ps4'} proveedor={'Sony'} cantidad={1} precio={1800.50}/> */}
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