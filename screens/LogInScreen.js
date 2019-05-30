import React, {Component} from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button, TouchableHighlight, ScrollView, FlatList, SectionList, Picker, AsyncStorage} from 'react-native';



export default class LogIn extends React.Component {

    state = {
        username: "",
        password: ""
    }

    submit = () => {
        // Falta hacer el fetch

    }
    render(){
        return(
            <View>
                <Text>Nombre de usuario</Text>
                <TextInput 
                onChangeText={(username) => this.setState({username})}/>
                <Text>Contraseña</Text>
                <TextInput
                onChangeText={(password) => this.setState({password})}/>
                <Button title="Aceptar" color='#00A210' onPress={this.submit} />
            </View>
        )
    }
}
