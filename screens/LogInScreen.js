import React, {Component} from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button, TouchableHighlight, ScrollView, FlatList, SectionList, Picker, AsyncStorage} from 'react-native';



export default class LogIn extends React.Component {

    constructor(props){
      super(props);

    }
    state = {
        username: "",
        password: "",
        id: "",
    }

    setAsyncId = async (id) => {
          try {
            await AsyncStorage.setItem('id', id)
          } catch(error){
            console.log(error);
          }
        }

        getId = async () => {
          try {
            const value = await AsyncStorage.getItem('id');
            if (value !== null) {
              // We have data!!
              console.log("-----> value kart" + value);
              this.setState({id: value});
            }
            return value;
          } catch (error) {
            // Error retrieving data
            console.log(error)
          }
          return value
        }

    setid = () => {
        fetch("http://"+global.localIP+":3001/productos/AppLogin/"+this.state.username+"/"+this.state.password)
          .then(response => response.json())
          .then(id => this.setState({id}))
          .then(_alert => {

              if(this.state.id === 0){
                  alert("Usuario o contraseña incorrectos")
                }
                else{ 
                    alert("Bienvenido " + this.state.username + this.state.id);
                    this.setAsyncId(this.state.id);
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
                <Button title="Aceptar" color='#00A210' onPress={() => this.setid()} />
            </View>
            
        )
    }
}
