import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const Footer = (props) => {
  const { textStyle, backFooter } = styles;
  
  return (
    <View style={backFooter}>
     
      <View style ={{flexDirection:'row',margin:20}}>


<TouchableOpacity
   style={{backgroundColor:'orange',padding:10,width:100,borderRadius:-50}}
>

    <Text style={{textAlign:'center',color:'#FFF'}} >  Dashboard</Text>
</TouchableOpacity>
<TouchableOpacity
   style={{backgroundColor:'blue',padding:10,width:100,borderRadius:-50}}
>

    <Text style={{textAlign:'center',color:'#FFF'}} > Purchased</Text>
</TouchableOpacity>
<TouchableOpacity
   style={{backgroundColor:'pink',padding:10,width:100,borderRadius:-50}}
>

    <Text style={{textAlign:'center',
      color: '#4CAF50',}} >Lottery</Text>
</TouchableOpacity>
<TouchableOpacity
   style={{backgroundColor:'violet',padding:10,width:100,borderRadius:-50}}
>

    <Text style={{textAlign:'center',
      color: '#4CAF50'}} >  Cart</Text>
</TouchableOpacity>


    </View>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      
      
      
    },
   
}
export default Footer;