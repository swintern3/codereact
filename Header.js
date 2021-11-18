import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>{props.headerText}</Text>
      <Text>Axxonet Drawer Navigation </Text>
      
      
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: 'orange',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      position: 'relative',
    },
    textStyle: {
      fontSize: 25,
      color: 'black',
      textAlign: 'center'
    }
}
 export default Header;

// import React from 'react';
// import { StyleSheet, View, Button, Text } from 'react-native';
// import { Card, Avatar, Tab, Header } from 'react-native-elements';


// export default class Home extends React.Component {

//     static navigationOptions = {
//         title: 'Home',
//     };

//     render() {

//         const { navigate } = this.props.navigation;
        

//         return (
          
            
                  
//                         <View style={{ color: 'darkorange'}}>
//                             <Header 
//                                 //leftComponent={{ icon: 'menu', color: '#fff',onPress: () =>  navigate('Login'), iconStyle: { color: '#fff' } }}
//                                 leftComponent={{ icon: 'menu', color: 'red', onPress: () => Alert.alert('Enter  to Drawer Naviagtion Screen !'), iconStyle: { color: '#fff' } }}
//                                 centerComponent={{ text: '*Box                                                   Cart', style: { color: '#fff' } }}
//                                 rightComponent={{ icon: 'shopping-cart', color: 'yellow', onPress: () => Alert.alert('Enter  to Cart Screen !') }}
//                             />
            
                       
            
                               
                          
                   
            
            
            
//                         </View>
             
//                     )
//     }

// }
