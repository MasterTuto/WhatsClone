import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity
}  from 'react-native';

class StatusIcon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
            <Image
                style={styles.statusIcon}
                source={ this.props.image }
            />
		);
	}
}

export class StatusItem extends Component {
	constructor(props) {
		super(props);
	}

	handleProfilePictureClick() {

	}

	render() {
		return (
			<View style={styles.messageFeedItem}>
				<View style={styles.contentAndLine}>
                    <TouchableOpacity
						style={styles.contentAndLine}
						onPress={()=>{this.props.onPress('showStatus', this.props.id) }}
					>
                        <StatusIcon
                            image={ this.props.lastStatus }
                            onPress={ this.handleProfilePictureClick.bind(this) }
                        />
						
                        <View style={{flexDirection: 'column', flex: 1,}} >
                            <Text style={styles.title} >{this.props.title}</Text>
						    <Text style={styles.statusDate}>{this.props.date}</Text>
                        </View>

                        <TouchableOpacity>
                            <Image
                                source={require('../assets/show-more-vertical.png')}
                                style={styles.showMyStatus}
                            />
                        </TouchableOpacity>
					</TouchableOpacity>
				</View>
				
				<View style={this.props.id==':you:'?styles.separator:styles.line}>
                    {
                        this.props.id == ':you:' ?
                        <Text style={{paddingLeft: 20, color:'#333'}}>Viewed updates</Text>:
                        null
                    }
                </View>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	messageFeedItem: {
		flexDirection: 'column',
		flex: 1,
	},
	statusIcon: {
		height: 55,
		width: 55,
		borderRadius: 40,
		margin: 23,
		flex: 0,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	statusDate: {
		color: '#444',
		justifyContent: 'flex-end'
    },
    contentAndLine: {
		flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
		height: 1,
		backgroundColor: '#ddd',
		width: '74%',
		marginLeft: '23%',
		marginRight: '3%',
    },
    separator: {
		height: 25,
		backgroundColor: '#ddd',
        width: '100%',
        justifyContent: 'center',
        borderTopColor: 'black',
        borderTopWidth: 0.29,
    },
    showMyStatus: {
        width: 27,
        height: 27,
        marginRight: 20,
    }
});