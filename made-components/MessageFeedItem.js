import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	Vibration,
	TouchableOpacity
}  from 'react-native';
import ImgToBase64 from 'react-native-image-base64';

class ChatDataIcons extends Component {
	render() {
		return (
			<View style={{flexDirection: 'row'}}>
				{this.props.isMuted ? 
					<Image style={ styles.chatDataIcon } source={require("../assets/mute-icon.png")} />
					: null
				}

				{this.props.isPinned ? 
					<Image style={ styles.chatDataIcon } source={require("../assets/pinned-icon.png")} />
					: null
				}

				{this.props.numberOfMessages != 0 ? 
					<View style={styles.numberOfMessagesCounter}>
						<Text style={{alignSelf: 'center',color:'white', fontSize: 12}} >{this.props.numberOfMessages}</Text>
					</View>
					: null
				}
			</View>
		);
	}
}

class ProfilePicture extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity>
				<Image
					style={styles.profilePicture}
					source={ this.props.image }
				/>
			</TouchableOpacity>
		);
	}
}

class ChatContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.messageFeedItemContent} >
				<Text style={ styles.title }>{this.props.title}</Text>
				
				{this.props.lastMessage.sender == '' ?
					<Text style={ styles.messageContent }>{this.props.lastMessage.content}</Text> :
					<Text style={ styles.messageContent }>{this.props.lastMessage.sender}: {this.props.lastMessage.content}</Text>
				}
			</View>
		);
	}
}

class ChatData extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.chatData}>
				<Text style={ styles.messageContent }>{this.props.lastMessage.time}</Text>

				<ChatDataIcons
					isPinned={this.props.isPinned}
					isMuted={this.props.isMuted}
					numberOfMessages={this.props.numberOfMessages}
				/>
			</View>
		);
	}
}


export class MessageFeedItem extends Component {
	constructor(props) {
		super(props);
	}

	handleProfilePictureClick() {

	}

	render() {
		return (
			<View style={styles.messageFeedItem}>
				<View style={styles.contentAndLine}>
					<ProfilePicture
						image={ this.props.profilePicture }
						onPress={ this.handleProfilePictureClick.bind(this) }/>
					
					<TouchableOpacity
						style={styles.contentAndLine}
						onPress={()=>{this.props.onPress('chat', this.props.id) }}
					>
						<ChatContent
							lastMessage={this.props.lastMessage}
							title={this.props.title}
						/>

						<ChatData
							lastMessage={this.props.lastMessage}
							isPinned={this.props.isPinned}
							isMuted={this.props.isMuted}
							numberOfMessages={this.props.numberOfMessages}
						/>
					</TouchableOpacity>
				</View>
				
				<View style={styles.line}/>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	messageFeedItem: {
		flexDirection: 'column',
		flex: 1,
		//backgroundColor: '#ccc',
	},
	profilePicture: {
		height: 70,
		width: 70,
		borderRadius: 40,
		margin: 15,
		flex: 0,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	messageContent: {
		color: '#444',
		justifyContent: 'flex-end'
	},
	messageFeedItemContent: {
		flex: 3,
		justifyContent: 'center'
	},
	chatData: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		paddingRight: 13,

	},
	line: {
		height: 1,
		backgroundColor: '#ddd',
		width: '74%',
		marginLeft: '23%',
		marginRight: '3%',
	},
	contentAndLine: {
		flex: 1,
		flexDirection: 'row',
	},
	numberOfMessagesCounter: {
		width: 20,
		height: 20,
		backgroundColor: '#25d366',
		borderRadius: 10,
		alignContent: 'center',
		justifyContent: 'center'
	},
	chatDataIcon: {
		width: 17,
		height: 17,
		marginRight: 5
	}
});