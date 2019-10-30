import React, { Component } from 'react';
import { Text } from 'react-native';

export class Ch0303 extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

