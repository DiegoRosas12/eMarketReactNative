import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import SignIn from './SignInScreen'

export default class PedidosScreen extends React.Component {
  static navigationOptions = {
    title: 'Pedidos',
  };

  render() {
    return (
      <SignIn/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
