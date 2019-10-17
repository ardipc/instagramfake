import React from 'react';
import { ScrollView, StyleSheet, View, Platform, Dimensions, AsyncStorage } from 'react-native';

import { Icon, Button, Text, Image, Card } from 'react-native-elements';
import { TabView, SceneMap, TabBar, PagerPan } from 'react-native-tab-view';

export default class DetailScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Detail',
    }
  };

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('userId', 'ardi.pc');
    } catch (error) {
      console.log('error saving data');
    }
  };

  _clearData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log('error clear data');
    }
  };

  _onPressScreen = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if(userId !== null) {
        console.log('nay: ', userId);
      } else {
        console.log('yay: ', userId);
      }     
    } catch(e) {
      console.log(e);
    }
  }

  _logOut = async () => {
    try {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    } catch (error) {
      console.log('error clear data');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Cek Session</Text>
        <Icon onPress={this._onPressScreen} type='ionicon' name='ios-more' />

        <Text>Set Session</Text>
        <Icon onPress={this._storeData} type='ionicon' name='ios-home' />

        <Text>Clear Session</Text>
        <Icon onPress={this._clearData} type='ionicon' name='ios-heart' />

        <Text>Logout</Text>
        <Icon onPress={this._logOut} type='ionicon' name='ios-log-out' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    margin: 10,
    backgroundColor: '#fff',
  },
});