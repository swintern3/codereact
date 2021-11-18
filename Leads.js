import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Icon,
  Avatar,
  Button,
  Title,
  Card,
  Paragraph,
} from 'react-native-elements';

export default class Leads extends React.Component {
  render() {
    return (
      <View >
        <Text> LEADS </Text>

        <Card containerStyle={{Borderradius:50}}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ alignItems: 'center' }}>
              <Avatar
                overlayContainerStyle={{ backgroundColor: 'blue' }}
                rounded
                title={23}
              />
              <Text>Stage 1</Text> <Text>New</Text>
            </View>
            <View style={{ marginTop: 10 }}>></View>

            <View style={{ alignItems: 'center' }}>
              <Avatar
                overlayContainerStyle={{ backgroundColor: 'blue' }}
                rounded
                title={3}
              />
              <Text>Stage 2</Text> <Text>Schedule</Text>
            </View>
            <View style={{ marginTop: 10 }}>></View>
            <View>
              <Avatar
                overlayContainerStyle={{ backgroundColor: 'blue' }}
                rounded
                title={2}
              />
              <Text>Stage 3</Text> <Text>Done</Text>
            </View>
            <View style={{ marginTop: 10 }}>></View>
            <View>
              <Avatar
                overlayContainerStyle={{ backgroundColor: 'blue' }}
                rounded
                title={2}
              />
              <Text>Stage 4</Text> <Text>Booked</Text>
            </View>
          </View>
        </Card>
     
         
      </View>
    );
  }
}
