import React, { Component } from 'react';
import { Text } from 'react-native';

export class Ch0401 extends Component {
    render() {
        let firstName = 'test';
        let lastName = 'name';
        return (
            <Text>{`${firstName} ${lastName}` } </Text>
        );
    }
}

