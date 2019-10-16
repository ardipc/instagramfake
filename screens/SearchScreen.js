import React from 'react';
import { ScrollView, StyleSheet, Dimensions, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { Icon, Button, Text, Image, Card } from 'react-native-elements';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

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

export default class SearchScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Search',
  });

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'GRIDS' },
      { key: 'second', title: 'POSTS' },
    ],
  };

  renderLabel = ({ route, focused, color }) => {
    return (
      <View>
        <Text style={[focused ? styles.activeTabTextColor : styles.tabTextColor]}>
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
    return (
      <TabView
        style={{marginTop: 10}}
        navigationState={this.state}
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
            renderLabel={this.renderLabel}
            indicatorStyle={{backgroundColor: "#555555"}}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
