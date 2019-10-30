import React, { Component } from 'react';
import { Text } from 'react-native';

export class Ch0304 extends Component {
    render() {
        return (
            <Text>{this.props.name}</Text>
        )
    }
}

Ch0304.defaultProps = {
    name: 'John'
}