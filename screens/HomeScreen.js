import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import TopBar from '../components/TopBar';
import Product from '../components/Product';

export default class HomeScreen extends React.Component {
//fetch get ---> producto_id price title all vector
//Build data vector ---> flatList

  state = {
    productos: []
  }
  static navigationOptions = {
    header: null,
  };

  setProductos(){
    fetch("http://192.168.1.120:3001/productos")
      .then(response => response.json())
      .then(productos => this.setState({productos}))
      .catch(error => {
        console.error(error);
      });
  }

  constructor(props){
    super(props);
    this.setProductos();
  }

  render() {
    var data = [];
    this.state.productos.map(producto => (
      data.push({key: `${producto.producto_id}`, nombre: producto.nombre, precio: producto.precio})
    ));
    return (
      <View style={styles.container}>
        <View style={styles.flatlist}>
          <FlatList
              data={data}
              renderItem={({ item }) => <Product price={item.precio} title={item.nombre} /> }
              numColumns={2}
            />
            
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 90
  },
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    marginTop: 90
  },
  product: {
    flex: 0,
  },
  contentContainer: {
    paddingTop: 0,
  },
  
});
