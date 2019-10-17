import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator, StatusBar, AsyncStorage} from 'react-native';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { Icon, Button, Image, Card } from 'react-native-elements';

import MainTabNavigator from './MainTabNavigator';

export class SignInScreen extends React.Component {
	
	_onSignIn = async () => {
		try {
      await AsyncStorage.setItem('userId', 'ardi.pc');
      this.props.navigation.navigate('Main');
    } catch (error) {
      console.log('error saving data');
    }
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Sign In Screen</Text>
				<Icon onPress={this._onSignIn} type='ionicon' name='ios-home' />
			</View>
		);
	}
}

export class AuthScreen extends React.Component {
	componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userId = await AsyncStorage.getItem('userId');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userId ? 'Main' : 'SignIn');
  };

	render() {
		return (
			<View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
		);
	}
}

// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    SignIn: SignInScreen,
    Auth: AuthScreen
  }, { initialRouteName: 'Auth' })
);

const styles = StyleSheet.create({
	container: {
		margin: 30
	}
});