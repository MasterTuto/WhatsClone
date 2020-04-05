import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
} from 'react-native';

export class Toolbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isSearchBarActive: false,
		}
	}

	showSettingsPopUp() {

	}

	render() {
		return (
			<View style={styles.toolbar}>
				<Text style={styles.whatsappLogo}>WhatsApp</Text>

				<TouchableOpacity onPress={ this.props.activateSearchBar }>
					<Image
					style={styles.searchButton}
					source={require('../assets/search.png')}
					/>
				</TouchableOpacity>

				<TouchableOpacity onPress={ this.showSettingsPopUp }>
					<Image
					style={styles.searchButton}
					source={require('../assets/show-more.png')}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	toolbar: {
		backgroundColor: "#075e54",
		paddingTop: 20,
		flexDirection: 'row',
		//justifyContent: 'space-between',
	},
	whatsappLogo: {
		fontSize: 30,
		margin: 15,
		marginLeft: 20,
		color: 'white',
		paddingRight: 190,
	},
	searchBar: {
		backgroundColor: 'white',
		fontSize: 18,
		padding: 20,
		flex: 1,
	},
	searchButton: {
		height: 27,
		width: 27,
		alignSelf: 'center',
		marginTop: 19,
		marginRight: 20,
	},
	cancelSearchButton: {
		marginTop: 19,
		marginLeft: 20,
		height: 27,
		width: 27,
	}
});