import React from 'react';
import { ScrollView, StyleSheet, View, Platform, Dimensions } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { Icon, Button, Text, Image, Card } from 'react-native-elements';
import { TabView, SceneMap, TabBar, PagerPan } from 'react-native-tab-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    margin: 10,
    backgroundColor: '#fff',
  },
  iconContainerRight: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 80,
    marginRight: -12 
  },
  iconContainerLeft: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 80,
    marginLeft: -18
  },
  titleAccount: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  descriptionAccount: {
    fontSize: 12,
    marginBottom: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  infoAccount: {
    fontWeight: 'bold'
  }
});

const FirstRoute = () => (
  <View style={styles.container}>
    <Card title="Tidak ada data untuk ditampilkan">
      <Text>
        Tidak ada data untuk ditampilkan tab
      </Text>
      <Text>
        You don't have any trip or your trips has been cancel.
      </Text>
    </Card>
  </View>
);

const SecondRoute = () => (
  <View style={styles.container}>
    <Card title="Tidak ada data untuk ditampilkan">
      <Text>
        Tidak ada data untuk ditampilkan
      </Text>
      <Text>
        You don't have any trip or your trips has been cancel.
      </Text>
    </Card>
  </View>
);

export default class AccountScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Account',
      headerRight: (
        <View style={styles.iconContainerRight}>
          <Icon onPress={navigation.getParam('moveScreen')} type="ionicon" name={Platform.OS === "ios" ? "ios-menu" : "md-menu"} />
        </View>
      )
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({ moveScreen: this._onPressMore})
  }

  _onPressMore = () => {
    this.props.navigation.navigate('More')
  }

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'GRIDS' },
      { key: 'second', title: 'POSTS' },
    ],
  };

  _onPressEditProfile = () => {
    console.log('click edit profile')
  }

  _renderPager = props => (
    <PagerPan {...props} />
  );

  _renderLabel = ({ route, focused, color }) => {
    return (
      <View>
        <Text
          style={[focused ? styles.activeTabTextColor : styles.tabTextColor]}
        >
          {route.title}
        </Text>
      </View>
    )
  }

  _sceneMap = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  })

  render() {
    const account = {
      name: 'Ahmad Ardiansyah',
      description: 'Deskripsi Ahmad Ardiansyah',
      postsCount: 120,
      followerCount: 1234,
      followingCount: 21
    }

    const screenWidth = Dimensions.get('window').width - 20;

    return (
      <ScrollView style={styles.container}>

        <View style={{marginTop: 1, marginBottom: 5}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            
            <View style={{width: screenWidth/4, height: screenWidth/4, justifyContent: 'center', alignItems: 'center' }}>
              <Image 
                source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'}} 
                style={{width: (screenWidth/4) - 5, height: (screenWidth/4) - 5, borderRadius: 80/2, borderWidth: 1, borderColor: '#e9e9e9'}} 
              />
            </View>

            <View style={{width: screenWidth/4, height: screenWidth/4, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.infoAccount}>{account.postsCount}</Text>
              <Text>Posts</Text>
            </View>

            <View style={{width: screenWidth/4, height: screenWidth/4, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.infoAccount}>{account.followerCount}</Text>
              <Text>Followers</Text>
            </View>
            
            <View style={{width: screenWidth/4, height: screenWidth/4, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.infoAccount}>{account.followingCount}</Text>
              <Text>Following</Text>
            </View>
          </View>    
        </View>

        <Text style={styles.titleAccount}>{account.name}</Text>
        <Text style={styles.descriptionAccount}>{account.description}</Text>

        <Button
          title="Edit Profile"
          type="outline"
          onPress={this._onPressEditProfile}
        />

        <TabView
          style={{marginTop: 10}}
          navigationState={this.state}
          renderPager={this._renderPager}
          renderScene={this._sceneMap}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ 
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          renderTabBar={(props) =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'black' }}
              style={{backgroundColor: "white", zIndex: 0}}
              renderLabel={this._renderLabel}
              indicatorStyle={{backgroundColor: "#555555"}}
            />
          }
        />

      </ScrollView>
      
    );
  }
}