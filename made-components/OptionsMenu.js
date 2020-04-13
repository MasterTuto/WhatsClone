import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableNativeFeedback,
	StyleSheet,
	Image
}  from 'react-native';

export class OptionsMenu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: 1,
		}
	}

	render() {
		return (
			<View style={styles.optionsMenu}>
				<TouchableNativeFeedback style={styles.mensagensBotao} useForeground={true}>
					<View style={ [ styles.button, styles.buttonCamera ]}>
						<Image source={require("../assets/cam-icon.png")} style={{width: 24, height: 24, opacity: 0.5}}/>
					</View>
				</TouchableNativeFeedback>

				<TouchableNativeFeedback
					style={styles.mensagensBotao}
					useForeground={true}
					onPress={()=>{this.props.onPress('main', null)}}
				>
					<View style={ [styles.button, this.props.current == 'main'? styles.current : null]}>
						<Text style={styles.text}>CHATS</Text>
					</View>
				</TouchableNativeFeedback>

				<TouchableNativeFeedback
					style={styles.mensagensBotao}
					useForeground={true}
					onPress={()=>{this.props.onPress('status', null)}}
				>
					<View style={ [styles.button, this.props.current == 'status'? styles.current : null]}>
						<Text style={styles.text}>STATUS</Text>
					</View>
				</TouchableNativeFeedback>

				<TouchableNativeFeedback
					style={styles.mensagensBotao}
					useForeground={true}
					onPress={()=>{this.props.onPress('calls', null)}}
				>
					<View style={ [styles.button, this.props.current == 'calls'? styles.current : null]}>
						<Text style={styles.text}>CHAMADAS</Text>
					</View>
				</TouchableNativeFeedback>

			</View>
		);
	};
}

const styles = StyleSheet.create({
	optionsMenu: {
		flexDirection: 'row',
		backgroundColor: "#075e54",
		height: 50,
		alignItems: 'center'
	},
	text: {
		fontSize: 13,
		color: 'white',
		fontFamily: 'sans-serif-medium'
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 2,
		height: '100%',
		opacity: 0.5,
	},
	current: {
		opacity: 1,
		borderBottomColor: 'white',
		borderBottomWidth: 2,
	},
	buttonCamera: {
		flex: 1
	}
});