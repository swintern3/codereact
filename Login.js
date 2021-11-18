
//------------------Login Page-----------------------------------------

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Icon,Box,Image, ScrollView, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class Login extends Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('Home'),
            // headerRight: (
            //     <View >
            //       <Icon type="ionicon" name={Platform.OS === "android" ? "ios-search" : "md-search"} />
            
            //     </View>
            //   )   
        };
    };

    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
            isLoading: false
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    userRegister = () => {
        Alert.alert('Enter details to Register!')
    }
    forgotPassword = () => {
        Alert.alert('Please set new password')
    }
    userDashboard = () => {
        Alert.alert('Enter  to Dashboard Screen!')
    }
    userPurchased = () => {
        Alert.alert('Enter  to Purchased Screen!')
    }
    userLotteries = () => {
        Alert.alert('Enter  to Lotteries Screen!')
    }
    userCart = () => {
        Alert.alert('Enter  to Cart Screen !')
    }
    userLogin = () => {
        if (this.state.userName === 'admin' && this.state.password === '1234') {
           this.props.navigation.navigate('Cart')
        } else {
            //this.props.navigation.navigate('Home')
            Alert.alert('Enter correct details to login')
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
        return (
            <ScrollView>
                
                 <Text
                        style={styles.horizontal}>
                            
                           
                        AXXONET TECHNOLOGIES
                    </Text>
                <View style={styles.container}>

                    {/* <Text
                        style={styles.loginText}>
                        Axxonet Version - 1
                    </Text> */}
                    {/* <Image
                        style={styles.tinyLogo}
                        source={{ uri: 'https://lh5.googleusercontent.com/p/AF1QipNpDFUhvoiRgLfG5b8HXabHyOvjindoL0xdBaNf=w203-h136-k-no' }}
                    /> */}

                    {/* <Text
                        style={styles.horizontal}>
                        AXXONET TECHNOLOGIES
                    </Text> */}
                    <Text
                        style={styles.loginText1}>
                        V1.0
                    </Text>
                    
                    
                    <TextInput
                        style={styles.textInput}
                        placeholder="Users Name"
                        value={this.state.email}
                        onChangeText={(val) => this.updateInputVal(val, 'userName')}
                    />
                    
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={(val) => this.updateInputVal(val, 'password')}
                        maxLength={15}
                        secureTextEntry={true}
                    />
                     
                    {/* <Button  style={styles.navBarLeftButton}
                        color="#2EB6CB"
                        title="login"
                        width="5px"
                        onPress={() => this.userLogin()}
                        
                        Click Login
                    /> */}
{/* <FontAwesome5 name={'comments'}/>
<FontAwesome5 name={'facebook'}/>
<FontAwesome5 name={'google'}/>
<FontAwesome5 name={'fa-sign-in'}/> */}


                    <Text
                     style={styles.textInput}
                        // style={{
                        //     flex: 1,
                        //     flexDirection: 'row',
                        //     alignItems: 'center',
                        //     justifyContent: 'center',
                        // }}
                         onPress={() => this.userLogin()}>
                            
                              Click Login                <FontAwesome5 name={'sign-in-alt' } size={20}/> Login
                       
                    </Text>
                   

<View style ={{flexDirection:'row',margin:20,paddingVertical:20}}>


<TouchableOpacity
   style={{backgroundColor:'#0d47a1',padding:10,width:250,borderRadius:600}}
>

    <Text style={{textAlign:'center',color:'#FFF'}} onPress={() => this.userLogin()}> <FontAwesome5 name={'sign-in-alt' } size={20}/> Login</Text>
</TouchableOpacity>


    </View>

                    
                    {/* 
<TextInput placeholder="Enter something..." 
                                   value={inputValue} style={styles.textInput} 
                                   onChangeText={(value) => setInputValue(value)} /> */}
                    <TouchableOpacity>
                        <Text style={styles.loginText}
                            onPress={() => this.forgotPassword()} >
                           <FontAwesome5 name={'address-book'} size={15}/> Forget Password
                        </Text>
                    </TouchableOpacity>

                    <Text
                        style={styles.loginText}>
                       
                    </Text> 
                    <Text
                        style={styles.textInput}
                        onPress={() => this.userRegister()}>
                       .                                <FontAwesome5 name={'heart'} size={20}/> Register 
                        
                    </Text>
                    <View style ={{flexDirection:'row',margin:20,paddingVertical:20}}>
                 

<TouchableOpacity
   style={{backgroundColor:'#0d47a1',padding:10,width:250,borderRadius:30}}
>

    <Text style={{textAlign:'center',color:'#FFF'}}><FontAwesome5 name={'heart'} size={20}/> Register</Text>
</TouchableOpacity>
    </View>
                    {/* <Text
                        style={styles.textInput2}
                        onPress={() => this.userRegister()}>
                        Register
                    </Text> */}

                    {/* <Image
                        style={styles.tinyLogo}
                        source={{uri: 'https://lh5.googleusercontent.com/p/AF1QipNpDFUhvoiRgLfG5b8HXabHyOvjindoL0xdBaNf=w203-h136-k-no' }}
                        
                        //source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    />
                    <TouchableOpacity>
                        <Text style={styles.forgot}>Click here</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.tinyLogo}
                        source={{uri: 'https://lh5.googleusercontent.com/p/AF1QipNpDFUhvoiRgLfG5b8HXabHyOvjindoL0xdBaNf=w203-h136-k-no' }}
                        
                        //source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    /> */}
                    
                </View>
              
                <Image
                        style={styles.tinyLog}
                        source={{uri: 'https://lh5.googleusercontent.com/p/AF1QipNpDFUhvoiRgLfG5b8HXabHyOvjindoL0xdBaNf=w203-h136-k-no' }}
                        
                        //source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    />
                      <Button
                    title="Go to home screen"
                    onPress={() => navigate('Cart')}
                />
                     <Text
                        style={styles.loginText}
                        onPress={() => this.userRegister()}>
                        Footer
                        
                    </Text>
                    <View style ={{flexDirection:'row',margin:20,paddingVertical:20}}>


<TouchableOpacity
   style={{backgroundColor:'#0d47a1',padding:10,width:100,borderRadius:-50}}
>

    <Text style={{textAlign:'center',color:'#FFF'}} onPress={() => this.userDashboard()}>  Dashboard</Text>
</TouchableOpacity>
<TouchableOpacity
   style={{backgroundColor:'#0d47a1',padding:10,width:100,borderRadius:-50}}
>

    <Text style={{textAlign:'center',color:'#FFF'}} onPress={() => this.userPurchased()}> Purchased</Text>
</TouchableOpacity>
<TouchableOpacity
   style={{backgroundColor:'#0d47a1',padding:10,width:100,borderRadius:-50}}
>

    <Text style={{textAlign:'center',color:'#FFF'}} onPress={() => this.userLotteries()}>Lotteries</Text>
</TouchableOpacity>
<TouchableOpacity
   style={{backgroundColor:'#0d47a1',padding:10,width:100,borderRadius:-50}}
>

    <Text style={{textAlign:'center',color:'#FFF'}} onPress={() => this.userCart()}>  Cart</Text>
</TouchableOpacity>


    </View>
                    
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff'
    },
    inputIcon: {
        width: 70,
        height: 30,
        marginBottom: 5
    
      },
    textInput: {
        width: "105%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        fontSize:15,
        borderWidth: 1,
        marginBottom: 8,
        backgroundColor: '#fff',
        alignContent:'flex-end'
    },
    textInput3: {
        width: "200%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
        backgroundColor: 'red'
    },
    navBarLeftButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 100,
        paddingLeft: 8
      },
  
      buttonText: {
        color: 'rgba(255,255,255,0.70)',
        fontSize: 14
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 100,
        paddingStart:20,
        paddingRight:-22,
        height:80 ,
        fontSize:30,
      
        backgroundColor: 'red'
      },
    textInput2: {
        width: "1300%",


        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 106,
        paddingRight: 818,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
        backgroundColor: 'red'
    },
    forgot: {
        color: "light-blue",
        fontSize: 50
    },
    tinyLogo: {
        width: 340,
        height: 50,
        paddingTop: 300
    },
    tinyLog: {
        width: 450,
        height: 50,
        paddingTop: 300
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1
    },
    loginText: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center',
        
    },
    loginText1: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center',
        fontSize:60,
    },

    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});
