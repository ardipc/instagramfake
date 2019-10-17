import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import { SliderBox } from 'react-native-image-slider-box';

export default class SettingsScreen extends React.Component {

	render() {
		const images = [
			'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?girl',
      'https://source.unsplash.com/1024x768/?tree'
		];
		return (
			<SliderBox images={images} circleLoop />
		);
	}
}

SettingsScreen.navigationOptions = {
  title: 'Posts',
};
