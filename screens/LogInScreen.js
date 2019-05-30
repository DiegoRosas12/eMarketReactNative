import React, {Component} from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button, TouchableHighlight, ScrollView, FlatList, SectionList, Picker, AsyncStorage} from 'react-native';



export default class LogIn extends React.Component {

    state = {
        username: "",
        password: "",
        user_id: 0,
    }

    setAsyncId = async (id) => {
          try {
            await AsyncStorage.setItem('id', id)
          } catch(error){
            console.log(error);
          }
        }


    setUser_id = () => {
        fetch("http://192.168.1.120:3001/productos/AppLogin/"+this.state.username+"/"+this.state.password)
          .then(response => response.json())
          .then(user_id => this.setState({user_id}))
          .then(_alert => {

              if(this.state.user_id === 0){
                  alert("Usuario o contraseña incorrectos")
                }
                else{ 
                    alert("Bienvenido " + this.state.username + this.state.user_id);
                    this.setAsyncId(this.state.user_id);
                } 
            })
          .catch(error => {
            console.error(error);
          })
      }

    render(){
        return(
            <View>
                <Text>Nombre de usuario</Text>
                <TextInput 
                onChangeText={(username) => this.setState({username})}/>
                <Text>Contraseña</Text>
                <TextInput
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}/>
                <Button title="Aceptar" color='#00A210' onPress={this.setUser_id} />
            </View>
            
        )
    }
}
