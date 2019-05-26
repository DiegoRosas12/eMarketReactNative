import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';


export default class Product extends React.Component {
    state = {
        title: "Ps4",
        imagen: "../assets/images/robot-dev.png",
        precio: 0
    }
    render (){
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/images/ps4.png')}/>
                <Text>{this.state.title}</Text>
                <Text>{this.state.precio}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 120,
        margin: 20,
        backgroundColor: '#fff',
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1
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
    }
})