import React, {Component} from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button, TouchableHighlight, ScrollView, FlatList, SectionList, Picker, AsyncStorage} from 'react-native';



export default class SignIn extends React.Component {
  constructor(props){
      super(props);
      this.state ={
        username: "",
        nombre: "",
        correo: "",
        password: "",
        direccion: "",
        ciudad: "",
        estado: "",
        cp: "",
        telefono: "",
        rfc: ""
      };
      
  }
  
  submit = () => {

  fetch("http://192.168.1.120:3001/authentication/SignUp", {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: this.state.username,
      nombre: this.state.nombre,
      correo: this.state.correo,
      password: this.state.password,
      direccion: this.state.direccion,
      ciudad: this.state.ciudad,
      estado: this.state.estado,
      cp: this.state.cp,
      telefono: this.state.telefono,
      rfc: this.state.rfc
    })
  })
  .catch(function(error) {
    console.log(error.message);
    throw error;
  });

    alert("Usuario " + this.state.username +  " creado!");
  }

  
  render() {
    
      return (
        <ScrollView contentContainerStyle={styles.signin}>
          <Image style={styles.logo} source={require('../assets/images/logo.png')} />
          <Text style={styles.h1}>Completa tus datos</Text>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            onChangeText={(username) => this.setState({username})}
  
          />
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={(nombre) => this.setState({nombre})}
  
          />
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            onChangeText={(correo) => this.setState({correo})}
            placeholder="correo@ejemplo.com"
          />
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            placeholder="Entre 6 y 20 caracteres"
          />
          <Text style={styles.label}>Dirección</Text>
          <TextInput
            style={styles.input}
            onChangeText={(direccion) => this.setState({direccion})}
  
          />
          <Text style={styles.label}>Ciudad</Text>
          <TextInput
            style={styles.input}
            onChangeText={(ciudad) => this.setState({ciudad})}
  
          />
          <Text style={styles.label}>Estado</Text>
          <TextInput
            style={styles.input}
            onChangeText={(estado) => this.setState({estado})}
  
          />
            <Text style={styles.label}>Código Postal</Text>
          <TextInput
            style={styles.input}
            onChangeText={(cp) => this.setState({cp})}
  
          />
            <Text style={styles.label}>Teléfono</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={(telefono) => this.setState({telefono})}
            placeholder="(000) 000 - 00 - 00"
          />
            <Text style={styles.label}>RFC</Text>
          <TextInput
            style={styles.input}
            onChangeText={(rfc) => this.setState({rfc})}
          />
          <View style={{width: 400, marginTop:10, marginBottom: 30}}>
  
          <Button title="Aceptar" color='#00A210' onPress={this.submit} />
          </View>
          <Text style={{width: 300, marginBottom: 30, textAlign: 'center'} }>Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de eMarket.</Text>
        </ScrollView>
      );
    }
    
}


const styles = StyleSheet.create({

  input:{
    borderColor: 'white',
    borderWidth:1,
    borderBottomColor: 'black',
    width: 400,
    marginBottom: 20,
    color: '#00A210'
  },
  h1:{
    fontSize: 25,
    fontWeight:"300",
  },
  signin: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
      marginTop: 30,
      height: 42,
      width: 65, 
      marginBottom: 20
  },
  label:{
      width: 400,
      textAlign: 'left',
  }
});

const stylesProfile = {
  container : {
    flex: 1,
  },
  box : {
    marginTop: 20,
  }
}
