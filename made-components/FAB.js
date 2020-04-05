import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Image,
	ToastAndroid,
}  from 'react-native';

export class FAB extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={[ styles.fab, this.props.style]}>
				<TouchableOpacity onPress={() => ToastAndroid.show("Show contacts...", 2)}>
					<Image
						source={ require('../assets/chat-icon.png') }
						style={
							{
								width: 21,
								height: 20,
							}
						}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	fab: {
		backgroundColor: '#25d366',
		width: 64,
		height: 64,
		borderRadius: 32,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 10,	
	}
});