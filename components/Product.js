import React from 'react';
import {View, StyleSheet, Image, Text, Alert, Button, TouchableHighlight, Modal, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'


export default class Product extends React.Component {

  //Props ---> Producto_id
  //fetch ---> producto_id detail
    state = {
        title: "PlayStation 4",
        imagen: "../assets/images/robot-dev.png",
        precio: 0, 
        modal: false,
    }
    
    
    setModalVisible(visible) {
      this.setState({modal: visible});
    }
    
    render (){
      // const {price, title, image } = this.props;
      return (
          <View style={styles.producto}>
            <Modal
              animationType="fade"
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
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.precio}>
                      $ {this.props.price}
                    </Text>
                    <ScrollView>
                      <Text style={styles.descripcion}>
                        Deleniti officia ut nam. Est itaque minus
                        nostrum aspernatur. Repellendus sit consequuntur
                        quasi aliquam nesciunt. Voluptatibus impedit
                        autem cupiditate. Ut quis facere itaque vel quos
                        corporis vitae. Ab ut saepe magnam nulla quo. Ut
                        est omnis nostrum. Eos doloremque non quae fuga
                        eveniet vel quasi aperiam. Voluptas debitis quo
                        debitis est iste qui aut sed. Dignissimos quas
                        vel doloribus deleniti quos cupiditate vel
                        officia. Deleniti officia ut nam. Est itaque
                        minus nostrum aspernatur. Repellendus sit
                        consequuntur quasi aliquam nesciunt.
                      </Text>
                    </ScrollView>
                    <View style={styles.buttons}>
                      <TouchableHighlight
                        style={styles.kart}
                        onPress={() => {
                          alert("Kart");
                        }}
                      >
                        <Text
                          style={{ color: "#07BA00", fontSize: 17 }}
                        >
                          Add to Kart
                        </Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={styles.buy}
                        onPress={() => {
                          alert("Buy");
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 17,
                            textAlign: "center"
                          }}
                        >
                          Buy
                        </Text>
                      </TouchableHighlight>
                    </View>
                  </View>

                  {/* <TouchableHighlight
                      onPress={() => {
                        this.setModalVisible(!this.state.modal);
                      }}
                    >
                      <Text>Hide Modal</Text>
                    </TouchableHighlight> */}
                  {/* </View> */}
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
                <Text>{this.props.title}</Text>
                <Text>{this.props.price}</Text>
              </View>
            </TouchableHighlight>

            <Button
              title="Buy"
              onPress={() => {
                alert("Buy");
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
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
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
        width: 80,
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