import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';


export default class CartItem extends React.Component {
    state = {
        title: "Ps4",
        imagen: "../assets/images/robot-dev.png",
        precio: 0
    }
    render (){
        // const {price, title, image } = this.props;
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/images/ps4.png')}/>
                <View style={styles.box}>
                    <Text style={styles.title} >{this.props.title}</Text>
                    <Text style={styles.h2} >{this.props.proveedor}</Text>
                    <Text style={styles.h2} >{this.props.precio}</Text>
                    <Text style={styles.h2} >{this.props.cantidad}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 150,
        width: 350,
        backgroundColor: '#fff',
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,
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