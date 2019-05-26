import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import TopBar from '../components/TopBar';
import Product from '../components/Product';

export default class HomeScreen extends React.Component {

  state = {
    productCount: 3
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainer}>
          
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1C1C115',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90
  },
  scroll: {
    flex: 1,
    marginTop: 90
  },
  contentContainer: {
    paddingTop: 0,
  },
  
});
