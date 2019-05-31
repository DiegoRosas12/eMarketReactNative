import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {View, StyleSheet, Image, Text, ScrollView, Platform, AsyncStorage, RefreshControl, TouchableHighlight} from 'react-native';
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
        id: "",
      };
    
  }

  

  getId = async () => {
    try {
      const value = await AsyncStorage.getItem('id');
      if (value !== null) {
        // We have data!!
        console.log("-----> value kart" + value);
        this.setState({id: value});
      }
      return value;
    } catch (error) {
      // Error retrieving data
      console.log(error)
    }
    return value
  }

  setProductos(){
    fetch("http://"+global.localIP+":3001/carritos/carrito/user"+this.state.id)
      .then(response => response.json())
      .then(productos => this.setState({productos}))
      .catch(error => {
        console.error(error);
      });
  }

  _onRefresh = () => {
    this.setState({refreshing: true});

    fetch("http://"+global.localIP+":3001/carritos/carrito/user"+this.state.id)
      .then(response => response.json())
      .then(productos => this.setState({productos}))
      .then(() => {
        this.setState({refreshing: false});
      })
      .then(this.getId())
      .catch(error => {
              console.error(error);
            });
  }
  
  render() {

    if(this.state.id !== ""){
      return (
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
          >
            <View style={styles.cart} />
            {this.state.productos.map(producto => (
              <CartItem
                key={producto.producto_id}
                producto_id={producto.producto_id}
                user_id={this.state.id}
                style={styles.cart}
                title={producto.nombre}
                proveedor={producto.username}
                cantidad=""
                precio={producto.precio}
              />
            ))}
          </ScrollView>
          <View style={styles.pagar}>
            <Text style={styles.whiteText}>Pagar</Text>
          </View>
        </View>
      );
    }
    else{
      return(
        <View style={styles.notlogged}>
          <TouchableHighlight onPress={() => this.getId()} >
            <Text>Inicia sesión o registrate para comenzar a comprar</Text>
          </TouchableHighlight>
         
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  notlogged:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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