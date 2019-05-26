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
                <Image style={styles.image} source={require('../assets/images/robot-dev.png')}/>
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
        width: 90,
        height: 90,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1
    },
    title: {
        color: 'black',
        fontSize: 24
    },
    price: {
        color: 'gray',
        fontSize: 14
    },
    image: {
        width: 30,
        height: 30
    }
})