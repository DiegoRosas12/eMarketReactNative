import React, { Component } from 'react'
import { AppRegistry, Image, View, StyleSheet } from 'react-native'

export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.box}>
          <Image style={styles.logo} source={require('../assets/images/logo.png')} />

          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingBottom: 20,
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    shadowColor :'black',
    shadowOpacity: 1,
    shadowOffset: {  width: 10,  height: 10,  }
  },
  logo: {
    height: 50,
    width: 60
  }
})
