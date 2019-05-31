import React from 'react';
import {View, StyleSheet, RefreshControl, FlatList, AsyncStorage, TouchableHighlight, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import CompraItem from '../components/CompraItem';

export default class ComprasScreen extends React.Component {
  static navigationOptions = {
    title: 'Compras',
  };

  constructor(props){
    super(props);
    this.state={
      compras: [],
      id: "",
      refreshing: false,
    }

    this.getId();
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
  

  getId = async () => {
    try {
      const value = await AsyncStorage.getItem('id');
      if (value !== null) {
        // We have data!!
        this.setState({id: value});
        this.setCompras(value);
      }
      return value;
    } catch (error) {
      // Error retrieving data
      console.log(error)
    }
    return value
  }

  setCompras(id){
    fetch("http://"+global.localIP+":3001/compras/selectCompras/"+id)
      .then(response => response.json())
      .then(compras => this.setState({compras}))
      .catch(error => {
        console.error(error);
      });
  }

  render() {

    if(this.state.id !== ""){

    
    var data =[];
    this.state.compras.map(compra =>(
      data.push({
        key: compra.compra_id,
        username: compra.username,
        nombre: compra.nombre,
        precio: compra.precio,
        fecha: compra.fecha
      })
    ));
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          refreshControl ={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          renderItem={({ item }) => 
          <CompraItem 
            title={item.nombre}
            precio={item.precio}
            fecha={item.fecha}
          />
        }
          numColumns={1}
        >

        </FlatList>
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
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#F1F1F1',
    alignItems: 'center'
  },
  notlogged:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
