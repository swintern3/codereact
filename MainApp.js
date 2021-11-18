import * as React from 'react';
import { View, Text, Image, TouchableOpacity,Card,Avatar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      { <Button onPress={() => navigation.toggleDrawer()} title='test' /> }


      <Text>.</Text>
      <Image
            source={{
              uri: 'https://lh5.googleusercontent.com/p/AF1QipNpDFUhvoiRgLfG5b8HXabHyOvjindoL0xdBaNf=w203-h136-k-no',
            }}
            style={{ width: 450, height: 250, borderRadius: 30 }}
          />
          
    </View>
  );
}

function Tasks() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={{
              uri: 'https://lh5.googleusercontent.com/p/AF1QipNpDFUhvoiRgLfG5b8HXabHyOvjindoL0xdBaNf=w203-h136-k-no',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
      <Text>Tasks</Text>
    </View>
  );
}

function Axxonet() {
    return (
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#f6f6f6',
          marginBottom: 20,
        }}
      >


           <Image
          source={{
            uri: 'https://lh5.googleusercontent.com/p/AF1QipNpDFUhvoiRgLfG5b8HXabHyOvjindoL0xdBaNf=w203-h136-k-no',
          }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
         <Text>Tasks</Text>
        </View>
    );
  }
  
function Products({ navigation }) {
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Products</Text>
        <Text>Home</Text>
      { <Button onPress={() => navigation.toggleDrawer()} title='test' /> }


      </View>
    );
  }
  
  
function Support() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Suport</Text>
      </View>
    );
  }
  
function Terms() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Terms</Text>
      </View>
    );
  }
  
function Logout() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Logout</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: 'green',
            marginBottom: 20,
          }}
        >
             <Image
            source={{
              uri: 'https://lh5.googleusercontent.com/p/AF1QipNpDFUhvoiRgLfG5b8HXabHyOvjindoL0xdBaNf=w203-h136-k-no',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <View>
            <Text>Axonet Technologies</Text>
            <Text>axxonet@gmail.com</Text>
          </View>
         
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: '#f6f6f6',
          padding: 20,
        }}
      >
        <Text>Axxonet Copyright@2021</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    
    Component={{ Icon: 'shopping-cart', color: 'yellow', onPress: () => Alert.alert('Enter  to Cart Screen !') }}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'red',
          elevation: 0,
          shadowOpacity: 0,
          
        },
     headerIcon:'heart',
        headerTitle: 'Axxonet Technologies',
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={Home} name='Home' Icon='heart'/>
      <Drawer.Screen component={Axxonet} name='Axxonet' />
      <Drawer.Screen component={Products} name='Products' />
      <Drawer.Screen component={Tasks} name='Tasks' />
      <Drawer.Screen component={Support} name='Support' />
      <Drawer.Screen component={Terms} name='Terms' />
      <Drawer.Screen component={Logout} name='Logout' />
     
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
