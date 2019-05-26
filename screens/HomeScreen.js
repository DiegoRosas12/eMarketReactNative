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
          
          <Product price={39.5} title={'Android'}/>
          <Product price={34.5} title={'Ps4'}/>
          <Product price={34.5} title={'Ps4'}/>
          <Product price={34.5} title={'Ps4'}/>
          <Product price={34.5} title={'Ps4'}/>

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
  scroll: {
    flex: 1,
    backgroundColor: '#ECECEC',
    marginTop: 90
  },
  product: {
    flex: 0,
  },
  contentContainer: {
    paddingTop: 0,
  },
  
});
