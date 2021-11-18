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

export default class Property extends React.Component {
  render() {
    return (
      <View>
        <Text> PROPERTIES </Text>
        <Card>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ alignItems: 'center' }}>
              <Avatar
                overlayContainerStyle={{ backgroundColor: 'red' }}
                rounded
                title={3}
              />
              <Text>New projects</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
              <Avatar
                overlayContainerStyle={{ backgroundColor: 'red' }}
                rounded
                title={8}
              />
              <Text>For Resale</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
              <Avatar
                overlayContainerStyle={{ backgroundColor: 'red' }}
                rounded
                title={4}
              />
              <Text>For Rental</Text>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}
