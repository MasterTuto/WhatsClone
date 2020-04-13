import React, { Component } from 'react';
import { View } from 'react-native';

import { Toolbar } from '../made-components/Toolbar';
import { OptionsMenu } from '../made-components/OptionsMenu';
import { SearchBar } from '../made-components/SearchBar';

export class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSearchBar: false,
        }
    }

    render() {
        let header;
        if (this.state.showSearchBar) {
            header = <SearchBar deactivateSearchBar={() => this.setState( {showSearchBar: false} )} />;
        } else {
            header = (
            <View>
                <Toolbar
                    activateSearchBar={() => this.setState( {showSearchBar: true} )}/>
                <OptionsMenu
                    onPress={ this.props.onChangeScreen }
                    current={ this.props.current }
                />
            </View>
            );
        }
        return header;
    }
}