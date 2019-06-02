import React from 'react';
import {View, StyleSheet, Image, Text, Alert, Button, TouchableHighlight, Modal, ScrollView, AsyncStorage} from 'react-native';
import { Icon } from 'react-native-elements'


export default class Product extends React.Component {

  //Props ---> Producto_id
  //fetch ---> producto_id detail
  state = {
    title: "PlayStation 4",
    imagen: "../assets/images/robot-dev.png",
    precio: 0, 
    modal: false,
    username: "",
    id: "",
  }
    constructor(props){
      super(props);
      this.getId();
    }

    addCompra = ( ) => {
      this.getId();
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getYear();
      year += 1900;
      if(this.state.id !== ""){
        fetch(
          "http://" + global.localIP + ":3001/compras/addCompra",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              producto_id: this.props.producto_id,
              user_id: this.state.id,
              cantidad: 1,
              precio_total: this.props.precio,
              fecha: `${year}-${month}-${date}`
            })
          }
        ).catch(function(error) {
          console.log(error.message);
          throw error;
        });

        Alert.alert("Compra", "Compra realizada");
      }
      else{
        Alert.alert("Baia", "No estas loggeado");
        
      }
    }
    
  
    getId = async () => {
      try {
        const value = await AsyncStorage.getItem('id');
        if (value !== null) {
          // We have data!!

          this.setState({id: value});
        }
        return value;
      } catch (error) {
        // Error retrieving data
        console.log(error)
      }
      return value
    }
    
    
    setModalVisible(visible) {
      this.setState({modal: visible});
    }

    addProduct2Kart(){
      this.getId();

      if(this.state.id !== ""){
        fetch(
          "http://" + global.localIP + ":3001/carritos/addCarrito",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              producto_id: this.props.producto_id,
              user_id: this.state.id,
              // user_id: parseInt(this.state.id,10),
              cantidad: 1
            })
          }
        ).catch(function(error) {
          console.log(error.message);
          throw error;
        });

        Alert.alert("Carrito", "Producto añadido");
      }
      else{
        Alert.alert("Baia", "No estas loggeado");
        
      }
    }
    
    render (){
      // const {price, title, image } = this.props;
      return (
          <View style={styles.producto}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modal}
              onRequestClose={() => {
                this.setModalVisible(!this.state.modal);
              }}
            >
              <View style={styles.contenedorModal}>
                <View style={styles.icon}>
                  <Icon
                    name="keyboard-arrow-left"
                    size={50}
                    onPress={() => {
                      this.setModalVisible(!this.state.modal);
                    }}
                  />
                </View>
                <View style={styles.Modal}>
                  <Image
                    style={styles.imageModal}
                    source={require("../assets/images/ps4.png")}
                  />
                  {/* <View> */}
                  <View style={styles.contenido}>
                    <Text style={styles.title}>{this.props.nombre}</Text>
                    <Text style={styles.precio}>
                      $ {this.props.precio}
                    </Text>
                    <ScrollView>
                      <Text style={styles.descripcion}>
                        {this.props.descripcion}
                      </Text>
                    </ScrollView>
                    <View style={styles.buttons}>
                      <TouchableHighlight
                        style={styles.kart}
                        onPress={() => {
                          this.addProduct2Kart();
                        }}
                      >
                        <Text
                          style={{ color: "#07BA00", fontSize: 17 }}
                        >
                          Carrito
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={styles.buy}
                        onPress={() => {
                          this.addCompra();
                        }}
                       
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 17,
                            textAlign: "center"
                          }}
                        >
                          Comprar
                        </Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </View>
              </View>
            </Modal> 

            <TouchableHighlight
              style={styles.container}
              onPress={() => {
                this.setModalVisible(!this.state.modal);
              }}
            >
              <View>
                <Image
                  style={styles.image}
                  source={require("../assets/images/ps4.png")}
                />
                <Text>{this.props.nombre}</Text>
                <Text>$ {this.props.precio}</Text>
                {/* <Text>Existencia: {this.props.existencia}</Text> */}
              </View>
            </TouchableHighlight>

            <Button
              title="Comprar"
              color='#00A210'
              onPress={() => {
                this.addCompra();
              }}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    producto:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        width: 175,
    },
    title: {
        color: 'black',
        fontSize: 24
    },
    price: {
        color: '#707070',
        fontSize: 14
    },
    image: {
        width: 70,
        height: 70
    },
    imageModal: {
        width: 180,
        height: 180,
    },
    Modal: {
        marginTop: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F1F1',
    },
    contenido: {
        flex: 1,
        marginRight: 60,
        marginLeft: 60,
    },
    title: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 40,
    },
    precio: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 25,
        paddingBottom: 10,
    },
    descripcion: {
        flex: 0,
        paddingBottom: 15,
    },
    buttons: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    }, 
    kart: {
        padding: 10,
    },
    buy: {
        backgroundColor: '#07BA00',
        padding: 10, 
        width: 110,
        borderRadius: 10
    },
    icon: {
        flex: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    contenedorModal: { 
        flex: 1,
        backgroundColor: '#F1F1F1',
    }
})