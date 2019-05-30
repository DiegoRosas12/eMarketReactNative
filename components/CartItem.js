import React from 'react';
import {View, StyleSheet, Image, Text, Alert, Button} from 'react-native';



export default class CartItem extends React.Component {
    state = {
        title: "Ps4",
        imagen: "../assets/images/robot-dev.png",
        precio: 0
    }

    deleteProduct = () =>{
        fetch("http://192.168.1.120:3001/carritos/deleteProductFromCarrito", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify({
        producto_id: this.props.producto_id,
        user_id: this.props.user_id,
        cantidad: 1,
      })
    })
    .catch(function(error) {
      console.log(error.message);
      throw error;
    });
    Alert.alert("producto eliminado");
}

    render (){
        // const {price, title, image } = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.info}>
                    <Image style={styles.image} source={require('../assets/images/ps4.png')}/>
                    <View style={styles.box}>
                        <Text style={styles.title} >{this.props.title}</Text>
                        <Text style={styles.h2} >Proveedor: {this.props.proveedor}</Text>
                        <Text style={styles.h2} >$ {this.props.precio}</Text>
                    </View>
                </View>

                <Button title="Eliminar" color='#00A210' onPress={this.deleteProduct} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 150,
        width: 350,
        backgroundColor: '#fff',
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,
    },
    info:{
        flex: 0,
        flexDirection: 'row',
    },
    box: {
        left: 30,
        height: 80,
    },
    title: {
        color: 'black',
        fontSize: 24
    },
    h2: {
        fontSize: 20,
        color: 'gray'
    },
    price: {
        color: '#707070',
        fontSize: 14
    },
    image: {
        marginLeft: 20,
        width: 140,
        height: 140
    }
})