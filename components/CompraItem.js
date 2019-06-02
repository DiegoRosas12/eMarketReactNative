import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';


export default class CompraItem extends React.Component {
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
                    <Text style={styles.h2} >${this.props.precio}</Text>
                    <Text style={styles.price} >Fecha</Text>
                    <Text style={styles.price} >{this.props.fecha}</Text>
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
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 10,
    },
    box: {
        left: 30,
        height: 80,
    },
    title: {
        color: 'black',
        fontSize: 24,
        paddingTop: 18,
    },
    h2: {
        fontSize: 16,
        color: 'gray',
        paddingTop: 14,
    },
    price: {
        color: '#707070',
        fontSize: 14
    },
    priceBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 30,
        marginLeft: 100
    },
    image: {
        marginLeft: 20,
        width: 100,
        height: 100
    }
})