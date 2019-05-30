import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import SignIn from './SignInScreen'

export default class PedidosScreen extends React.Component {
  static navigationOptions = {
    title: 'Pedidos',
  };

  setTemporalLogin = async () => {
    try {
      await AsyncStorage.setItem('user', 'prueba')
    } catch(error){
      console.log(error);
    }
  }
  componentDidMount(){
    this.setTemporalLogin()

  }
  getLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // We have data!!
        console.log(value);
        this.setState({username: value});
        return true;
      }
      return value;
    } catch (error) {
      // Error retrieving data
      console.log(error)
      return false;
    }
  }

  render() {

    if (this.getLogin()){
      return(
        <ScrollView style={stylesProfile.box} contentContainerStyle={styles.signin}>
          <Text>Perfil</Text>
          <Text>{this.state.username}</Text>
        </ScrollView>
      )
    } else{

      return (
        <SignIn/>
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
