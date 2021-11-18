import * as React from 'react';
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  } from 'react-native';
import {
  Icon,
  Avatar,
  Button,
  Title,
  Card,
  Paragraph,
  Divider
} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
export default class Socialfeeds extends React.Component {
  render() {
    return (
      <View >
        <Text> SOCIALFEEDS </Text>
        <Card>
          <View>
            <Text />
            <Avatar
              overlayContainerStyle={{ backgroundColor: 'green' }}
              rounded
              title={1}
            />

            <Text>ULTRA LUXURIOUS FLAT</Text>
            
            <Image
              source={{ uri: 'https://picsum.photos/700' }}
              style={{ width: 250, height: 300 }}
              
            />
          </View>
        

<Ionicons name="md-checkmark-circle" size={32} color="blue" />

<Divider style={{ backgroundColor: 'blue' }} />
<Text>Like                   Share                 Comment</Text>
<Divider style={{ backgroundColor: 'blue' }} />
      </Card>
      </View>
    );
  }
}
