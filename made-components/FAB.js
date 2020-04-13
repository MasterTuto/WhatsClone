import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Image,
	Dimensions
}  from 'react-native';

export class FAB extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.fab}>
				<TouchableOpacity
					onPress={this.props.onPress}
					onLongPress={this.props.onLongPress}
				>
					<Image
						source={ this.props.icon }
						style={[{width: 21, height: 20}, this.props.imageStyle]}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}

const screenWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
	fab: {
		backgroundColor: '#25d366',
		width: 64,
		height: 64,
		borderRadius: 32,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 6,	
		position: 'absolute',
		bottom: 35,
		left: screenWidth-83
	}
});