import React, { Component } from 'react'
import { View } from 'react-native'
import { CommonApp } from '@mono-repo/common';
import { TwoIconButton } from '@mono-repo/common/src/components/TwoIconButton' 
import realm from './Realm'
import { normalize, schema } from 'normalizr';
 
const wheel = new schema.Entity('wheels');
 
const car = new schema.Entity('cars', {
  wheels: [wheel]
});
 
const user = new schema.Entity('users', {
  cars: [car]
});
 
const sampleData = {
    id: "123",
    name: "Tom",
    cars: [
      {
        id: "324",
        make: "Tesla",
        model: "Model S",
        wheels: [{
          id: "2",
          name: "summer"
        },
        {
            id: "3",
            name: "summer"
          },
    ]
      },
      {
        id: "325",
        make: "Tesla",
        model: "Roadster",
        wheels: [{
          id: "4",
          name: "winter"
        },
        {
            id: "5",
            name: "winter"
          },
    ]
      }
    ]
}

const normalizedData = normalize(sampleData, user);

class App extends Component {

    componentWillMount() {
        // console.log(realm.objects('User').length)
        console.log(sampleData)
        console.log('normalized data')
        console.log(normalizedData)
    }
    
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