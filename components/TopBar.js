import React, { Component } from 'react'
import { AppRegistry, Image, View, StyleSheet, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.box}>
          <Image style={styles.logo} source={require('../assets/images/logo.png')} />
          <Ionicons size={30} style={styles.search} name='md-search'/>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingBottom: 4,
    paddingTop: 25,
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    shadowColor :'black',
    shadowOpacity: 1,
    shadowOffset: {  width: 10,  height: 50,  }
  },
  logo: {
    height: 42,
    width: 65
  },
  search: {
    padding: 10
  }
})
