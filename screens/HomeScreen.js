import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Dimensions,
  FlatList
} from 'react-native';
import { Icon, Image } from 'react-native-elements';
// import Image as 'ImageAuto' from 'react-native-scalable-image';
import AutoHeightImage from 'react-native-auto-height-image';
import { MonoText } from '../components/StyledText';

const win = Dimensions.get('window');

class ItemFeed extends React.PureComponent {
  render() {
    const item = this.props.item;
    return (
      <View>
        <View style={{flex: 1, flexDirection: 'row', margin: 5}}>
          <View style={{width: 35, height: 35, marginLeft: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Image 
              source={{ 
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
              }} 
              style={{width: 35, height: 35, borderRadius: 35/2, borderWidth: 1, borderColor: '#e9e9e9'}} 
            />
          </View>

          <View style={{width: Dimensions.get('window').width - 80, height: 35, justifyContent: 'center', padding: 8 }}>
            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
          </View>

          <View style={{width: 35, height: 35, justifyContent: 'center' }}>
            <Icon type='ionicon' name={Platform.OS == 'ios' ? 'ios-more' : 'md-more'} />
          </View>
        </View>

        <View>
          <AutoHeightImage
            width={win.width}
            source={{
              uri: item.cover,
              cache: 'only-if-cached'
            }}
          />
        </View>

        <View style={{flex: 1, flexDirection: 'row', margin: 5}}>
          <View style={{width: 35, height: 35, justifyContent: 'center'}}>
            <Icon type='ionicon' name={Platform.OS == 'ios' ? 'ios-heart' : 'md-heart'} />
          </View>
          
          <View style={{width: 35, height: 35, justifyContent: 'center'}}>
            <Icon type='ionicon' name={Platform.OS == 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'} />
          </View>

          <View style={{width: 35, height: 35, justifyContent: 'center'}}>
            <Icon type='ionicon' name={Platform.OS == 'ios' ? 'ios-share' : 'md-share'} />
          </View>

          <View style={{width: win.width - 150, height: 35, justifyContent: 'center'}}>
            
          </View>
          
          <View style={{width: 35, height: 35, justifyContent: 'center'}}>
            <Icon type='ionicon' name={Platform.OS == 'ios' ? 'ios-bookmark' : 'md-bookmark'} />
          </View>
        </View>

        <View style={{marginRight: 8, marginLeft: 8, marginBottom: 15}}>
          <Text style={{fontWeight: 'bold'}}>{item.likes} likes</Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>{item.name} </Text>
            <Text>{item.caption}</Text>
          </Text>
        </View>

        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: '#e9e9e9',
          }}
        />

      </View>
    );
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Instagram',
    headerLeft: (
      <View style={styles.iconContainerLeft}>
        <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-camera" : "md-camera"} />
      </View>
    ),
    headerRight: (
      <View style={styles.iconContainerRight}>
        <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-tv" : "md-tv"} />
        <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-send" : "md-send"} />
      </View>
    ),
  });

  _renderItemFeed = ({item, index}) => (
    <ItemFeed item={item} index={index} />
  );

  _keyExtractor = (item, index) => index.toString();

  render() {
    const listFeed = [
      {name: 'ardi.pc', likes: 1123, caption: 'Caption Image 1', cover: 'https://img.freepik.com/foto-gratis/lago-montanas_1204-507.jpg'},
      {name: 'ardiansyah3ber', likes: 13, caption: 'Caption Image 2', cover: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg'},
      {name: 'ardi.pc', likes: 116, caption: 'Caption Image 3', cover: 'https://i.pinimg.com/originals/b6/93/7c/b6937c7f6837a56341b4b40eda91aec3.jpg'},
    ];
    return (

      <FlatList
        data={listFeed}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItemFeed}
      />
        
    );
  }
}

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  iconContainerRight: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 80,
    marginLeft: 5
  },
  iconContainerLeft: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 80,
    marginLeft: -18
  },
});