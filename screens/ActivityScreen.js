import React from 'react';
import { SectionList, StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default class ActivityScreen extends React.Component {

	_renderItem = ({item}) => {
		return (
			<View style={{margin: 5}}>
	      <View style={{flex: 1, flexDirection: 'row'}}>
	        
	        <View style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
	          <Image 
	            source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'}} 
	            style={{width: 50, height: 50, borderRadius: 50/2, borderWidth: 1, borderColor: '#e9e9e9'}} 
	          />
	        </View>

	        <View style={{width: Dimensions.get('window').width - 58, height: 50, justifyContent: 'center',  }}>
						<Text style={styles.item}>{item}</Text>
	        </View>

	      </View>
	    </View>
		);
	};

	_renderSectionHeader = ({section}) => {
		return (
			<Text style={styles.sectionHeader}>{section.title}</Text>
  	)
	};

	render() {
		const lists = [
      {title: 'This Week', data: ['Ahmad starting following you', 'Ardi like your post', 'Ansyah starting gollowing you']},
      {title: 'This Month', data: ['Devin like your post', 'Dan comment on your post', 'Dominic starting following you', 'David like your post']},
      {title: 'This Year', data: ['Jackson starting following you', 'James like your post', 'Jillian like your post', 'Jimmy starting following you', 'Joel like your post', 'John starting following you']},
    ]
		return (
			<View style={styles.container}>
        <SectionList
          sections={lists}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          keyExtractor={(item, index) => index}
        />
      </View>
		);
	}
}

ActivityScreen.navigationOptions = {
  title: 'Activity',
};

const styles = StyleSheet.create({
	container: {
   flex: 1,
  },
  sectionHeader: {
  	marginTop: 2,
  	marginBottom: 2,
    paddingTop: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 8,
    fontSize: 14,
  },
});