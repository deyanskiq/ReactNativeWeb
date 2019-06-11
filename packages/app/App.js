import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CommonApp } from '@mono-repo/common';
import { TwoIconButton } from '@mono-repo/common/src/components/TwoIconButton' 

class App extends Component {
    render() {
        return (
            <View flex>
                <CommonApp />
                <TwoIconButton
                    leftIcon={'https://pptcrafter.files.wordpress.com/2013/08/stopwatch2.png'}
                    rightIcon={'https://cdn.pixabay.com/photo/2014/09/26/10/45/arrow-462212_960_720.png'}>
                        Common repo button
                </TwoIconButton>
            </View >
        )
    }
}

export default App;