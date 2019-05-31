import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import TopBar from './components/TopBar';

global.localIP = "192.168.1.114"

export default class App extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      user: "",
      password: "",
    };
    this.getUserPassword();
  }

  getUserPassword = async () => {
    const user = await AsyncStorage.getItem("user");
    const password = await AsyncStorage.getItem("password");
    this.setState({
      user: {user},
      password: {password}
    });
  }
  saveUserPassword = async () => {
    await AsyncStorage.setItem("user", this.state.user);
    await AsyncStorage.setItem("password", this.state.password);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar backgroundColor="black" barStyle="light-content" />}
          <StatusBar backgroundColor="black" barStyle="dark-content"/>
          <View style={styles.topBar}>
            <TopBar/>
          </View>        
          <AppNavigator style={styles.appNavigator}/>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90
  },
});
