import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import TopBar from '../components/TopBar';
import Product from '../components/Product';

export default class HomeScreen extends React.Component {
//fetch get ---> producto_id price title all vector
//Build data vector ---> flatList

  state = {
    productCount: 3
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainer}>
          
          <Product price={39.5} title={'Android'}/>
          <Product price={34.5} title={'Ps4'}/>
          <Product price={34.5} title={'Ps4'}/>
          <Product price={34.5} title={'Ps4'}/>
          <Product price={34.5} title={'Ps4'}/>

        </ScrollView> */}
        <View style={styles.flatlist}>
          <FlatList 
              data={[
                {view: <Product /*producto_id*/ price={39.5} title={'Android'}/> , key: '1'},
                {view: <Product price={39.5} title={'Android'}/> , key: '2'},
                {view: <Product price={39.5} title={'Android'}/> , key: '3'},
                {view: <Product price={39.5} title={'Android'}/> , key: '4'},
                {view: <Product price={39.5} title={'Android'}/> , key: '5'},
                {view: <Product price={39.5} title={'Android'}/> , key: '6'},
                {view: <Product price={39.5} title={'Android'}/> , key: '7'},
                {view: <Product price={39.5} title={'Android'}/> , key: '8'},
                {view: <Product price={39.5} title={'Android'}/> , key: '9'},
                {view: <Product price={39.5} title={'Android'}/> , key: '10'},
                {view: <Product price={39.5} title={'Android'}/> , key: '11'},
                {view: <Product price={39.5} title={'Android'}/> , key: '12'},
                {view: <Product price={39.5} title={'Android'}/> , key: '13'},
                {view: <Product price={39.5} title={'Android'}/> , key: '14'},
                {view: <Product price={39.5} title={'Android'}/> , key: '15'},
                {view: <Product price={39.5} title={'Android'}/> , key: '16'},
              ]}
              renderItem={({ item }) => item.view}
              numColumns={2}
            />
            
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 90
  },
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    marginTop: 90
  },
  product: {
    flex: 0,
  },
  contentContainer: {
    paddingTop: 0,
  },
  
});
