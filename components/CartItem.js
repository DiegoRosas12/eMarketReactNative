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
                    <Text>{this.props.title}</Text>
                    <Text>{this.props.price}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
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
    price: {
        color: '#707070',
        fontSize: 14
    },
    image: {
        width: 70,
        height: 70
    }
})