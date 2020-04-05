import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	Image,
	TextInput,
	StyleSheet,
} from 'react-native';

export class SearchBar extends Component {
	render() {
		return (
			<View style={[ styles.toolbar, {backgroundColor: 'white'} ]}>
	            <TouchableOpacity onPress={ this.props.deactivateSearchBar }>
	              <Image
	                style={styles.cancelSearchButton}
	                source={require('../assets/left-arrow.png')}
	              />
	            </TouchableOpacity>
	            
	            <TextInput
	              style={styles.searchBar}
	              autoFocus={true}
	              onBlur={ this.props.deactivateSearchBar }
	              placeholder="Search..."
	            />
          	</View>
		);
	}
}

const styles = StyleSheet.create({
	toolbar: {
		backgroundColor: "#075e54",
		paddingTop: 20,
		flexDirection: 'row',
		elevation: 6,
		//justifyContent: 'space-between',
	},
	searchBar: {
		backgroundColor: 'white',
		fontSize: 18,
		padding: 20,
		flex: 1,
	},
	cancelSearchButton: {
		marginTop: 19,
		marginLeft: 20,
		height: 27,
		width: 27,
	}
});