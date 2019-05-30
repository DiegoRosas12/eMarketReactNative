import React from 'react';
import { ScrollView, StyleSheet, View, Modal, Text, AsyncStorage } from 'react-native';
import SignIn from './SignInScreen';
import LogIn from './LogInScreen';
import { Button } from 'react-native-elements';

export default class PedidosScreen extends React.Component {
  static navigationOptions = {
    title: 'Pedidos',
  };

  state = {
    username : "",
    id: "",
    showLogIn: false,
    showSignIn: false,
  }

  setTemporalLogin = async () => {
    try {
      await AsyncStorage.setItem('user', 'prueba')
      //this.setState({username: 'prueba1'})
    } catch(error){
      console.log(error);
    }
  }
  setTemporalId = async () => {
    try {
      await AsyncStorage.setItem('id', '1')
      //this.setState({username: 'prueba1'})
    } catch(error){
      console.log(error);
    }
  }
  componentDidMount(){
    this.setTemporalLogin()
    this.setTemporalId()
    this.getLogin();
    this.getId();
  }
  getLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // We have data!!
        console.log(value);
        this.setState({username: value});
      }
      return value;
    } catch (error) {
      // Error retrieving data
      console.log(error)
    }
    return value
  }

  getId = async () => {
    try {
      const value = await AsyncStorage.getItem('id');
      if (value !== null) {
        // We have data!!
        console.log(value);
        this.setState({id: value});
      }
      return value;
    } catch (error) {
      // Error retrieving data
      console.log(error)
    }
    return value
  }

  logout = async () => {
    try {
      await AsyncStorage.setItem('user', '');
      this.setState({username: ''});
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
  render() {

    if (this.state.username){
      return(
        <ScrollView style={styles.container} contentContainerStyle={styles.signin}>
          <Text>Perfil</Text>
          <Text>{this.state.username}</Text>
          <Text>{this.state.id}</Text>
          <Button title="cerrar sesion" color='#00A210'
          onPress={() => {
            this.logout();
          }}/>
        </ScrollView>
      )
    } else{
      return (
        <View>
          <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.showLogIn}
              onRequestClose={() => {
                this.showLogIn(!this.state.showLogIn);
              }}>
            <LogIn/>
          </Modal>
          <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.showSignIn}
              onRequestClose={() => {
                this.showSignIn(!this.state.showSignIn);
              }}>
            <SignIn/>
          </Modal>
          
          <Button title="iniciar sesion" color='#00A210'
              onPress={() => {
                this.showLogIn(!this.state.showLogIn);
              }}/>
          <Button title="registrase" color='#00A210'
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
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
