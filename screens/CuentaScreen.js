import React from 'react';
import { ScrollView, StyleSheet, View, Modal, Text, AsyncStorage, Button, TextInput, Image } from 'react-native';
import SignIn from './SignInScreen';
import LogIn from './LogInScreen';

export default class PedidosScreen extends React.Component {
  static navigationOptions = {
    title: 'Pedidos',
  };

  state = {
    user_id: "",
    showLogIn: false,
    showSignIn: false,
    username: "",
    nombre: "",
    correo: "",
    password: "",
    direccion: "",
    ciudad: "",
    estado: "",
    cp: "",
    telefono: "",
    rfc: "",
    userData: {},
  }

  
  logout = async () => {
    try {
      await AsyncStorage.setItem('id', '');
      this.setState({user_id: ""});
    } catch(error){
      console.log(error);
    }

  }

  showSignIn = (visible) => {
    this.setState({ showSignIn: visible})
  }
  showLogIn = (visible) => {
    this.setState({ showLogIn: visible})    
  }

  setAsyncId = async (id) => {
    try {
      await AsyncStorage.setItem('id', String(id))
      const value = await AsyncStorage.getItem('id');
    } catch(error){
      console.log(error);
    }
  }

  setUser_id = () => {
    //"+global.localIP+":3001

    fetch("http://"+global.localIP+":3001/productos/AppLogin/"+this.state.username+"/"+this.state.password)
      .then(response => response.json())
      .then(user_id => this.setState({user_id}))
      .then(_alert => {

          if(this.state.user_id === 0){
              alert("Usuario o contraseña incorrectos")
            }
            else{ 
                alert("Bienvenido " + this.state.username + this.state.user_id);
                this.setAsyncId(this.state.user_id);
                this.getDataUser(this.state.user_id);
                this.showLogIn(!this.state.showLogIn);
            } 
        })
      .catch(error => {
        console.error(error);
      })
  }

  submit = () => {

    fetch("http://"+global.localIP+":3001/authentication/SignUp", {
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
    
      this.showSignIn(!this.state.showSignIn);
      alert("Usuario " + this.state.username +  " creado!");
    }

    getDataUser = (id) =>{
      fetch("http://"+global.localIP+":3001/productos/getUser/"+id)
      .then(response => response.json())
      .then(userData => this.setState({userData}))
      .catch(error => {
        console.error(error);
      })
      
      }

  render() {

    if (this.state.user_id){
      
      return(
        <ScrollView style={styles.container} contentContainerStyle={styles.signin}>
          <Image style={styles.profile} source={require('../assets/images/profile.png')} />
          <View style={styles.nameMail}>
            <Text style={{fontSize: 60}}>{this.state.username}</Text>
            <Text style={{fontSize: 20}}>{this.state.userData.correo}</Text>
          </View>
          <View style={styles.descripcion}>
            <Text style={styles.label1}>Dirección: {this.state.userData.direccion}</Text>
            <Text style={styles.label1}>Ciudad: {this.state.userData.ciudad}</Text>
            <Text style={styles.label1}>Estado: {this.state.userData.estado}</Text>
            <Text style={styles.label1}>Código Postal: {this.state.userData.cp}</Text>
            <Text style={styles.label1}>Teléfono: {this.state.userData.telefono}</Text>
            <Text style={styles.label1}>RFC: {this.state.userData.rfc}</Text>
          </View>

          <Button title="cerrar sesion" color='#00A210'
          onPress={() => {
            this.logout();
          }}/>
        </ScrollView>
      )
    } else{
      return (
        <View style={styles.cuentaScreen} >
          <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.showLogIn}
              onRequestClose={() => {
                this.showLogIn(!this.state.showLogIn);
              }}>

            <View style={styles.cuentaScreen}>
                <Image style={styles.logologin} source={require('../assets/images/logo.png')} />
                <Text style={styles.label}>Nombre de usuario</Text>
                <TextInput 
                style={styles.input}
                onChangeText={(username) => this.setState({username})}/>
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}/>
                <Button title="Aceptar" color='#00A210' onPress={this.setUser_id} />
            </View>

          </Modal>
          <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.showSignIn}
              onRequestClose={() => {
                this.showSignIn(!this.state.showSignIn);
              }}>
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
            
          </Modal>
          <Image
                    style={styles.kart}
                    source={require("../assets/images/kart.png")}
          />
          <Text style={{fontSize: 30, marginBottom: 30}}>Entrar a mi cuenta</Text>
          <Button title="iniciar sesion" color='#00A210'
              onPress={() => {
                this.showLogIn(!this.state.showLogIn);
                
              }}/>
          <Text style={{fontSize: 30, marginBottom: 30, marginTop: 30}}>¿No tienes cuenta?</Text>
          <Button title="regístrate" color='#00A210'
              onPress={() => {
                this.showSignIn(!this.state.showSignIn);
              }}/>
        </View>
        //<SignIn/>
      );
    }
  }
}

const styles = StyleSheet.create({
  descripcion:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  nameMail: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  kart: {
    width: 60,
    height: 60,
},
  cuentaScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  input:{
    borderColor: 'white',
    borderWidth:1,
    borderBottomColor: 'black',
    width: 300,
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
  logologin: {
      height: 74,
      width: 120, 
      marginBottom: 60
  },
  profile: {
      height: 100,
      width: 100, 
      marginBottom: 40,
      marginTop: 60,
  },
  label:{
      width: 300,
      textAlign: 'left',
  },
  label1:{
      width: 300,
      textAlign: 'left',
      marginBottom: 20,
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


// setTemporalLogin = async () => {
  //   try {
  //     await AsyncStorage.setItem('user', 'prueba')
  //     //this.setState({username: 'prueba1'})
  //   } catch(error){
  //     console.log(error);
  //   }
  // }
  // setTemporalId = async () => {
  //   try {
  //     await AsyncStorage.setItem('id', '1')
  //     //this.setState({username: 'prueba1'})
  //   } catch(error){
  //     console.log(error);
  //   }
  // }
  // componentDidMount(){
  //   // this.setTemporalLogin()
  //   this.setTemporalId()
  //   // this.getLogin();
  //   this.getId();
  // }
  // getLogin = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('user');
  //     if (value !== null) {
  //       // We have data!!
  //       console.log(value);
  //       this.setState({username: value});
  //     }
  //     return value;
  //   } catch (error) {
  //     // Error retrieving data
  //     console.log(error)
  //   }
  //   return value
  // }
