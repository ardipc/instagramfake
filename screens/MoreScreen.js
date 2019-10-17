import React from 'react';
import { ScrollView, StyleSheet, View, Platform, Dimensions } from 'react-native';

import { Icon, Button, Text, Image, Card } from 'react-native-elements';
import { TabView, SceneMap, TabBar, PagerPan } from 'react-native-tab-view';

export default class MoreScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'More',
    }
  };

  _onPressScreen = () => {
    this.props.navigation.navigate('Detail');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Ahmad Ardiansyah More</Text>
        <Icon onPress={this._onPressScreen} type='ionicon' name='ios-home' />
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