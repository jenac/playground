import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export class Ch0301 extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        isYummy: PropTypes.bool.isRequired
    }
    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
                {this.props.isYummy ? <Text>THIS RECIPE IS YUMMY</Text> : null}
            </View>
        )
    }
}