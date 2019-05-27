import React from 'react';
import {View, StyleSheet, FlatList } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import CompraItem from '../components/CompraItem';

export default class ComprasScreen extends React.Component {
  static navigationOptions = {
    title: 'Compras',
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {view: <CompraItem title={"Ps4"} precio={39.95} fecha={"12/12/18"}/>, key: '1'},
            {view: <CompraItem title={"Ps4"} precio={39.95} fecha={"12/12/18"}/>, key: '2'},
            {view: <CompraItem title={"Ps4"} precio={39.95} fecha={"12/12/18"}/>, key: '3'}

          ]}
          renderItem={({ item }) => item.view}
          numColumns={1}
        >

        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#F1F1F1',
    alignItems: 'center'
  },
});
