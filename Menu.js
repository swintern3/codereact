import React from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, ScrollView, Text, Button } from 'react-native';
import { Card, Avatar, Tab, Header } from 'react-native-elements';

export default class Menu extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            
        };

    };
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
    render() {

        const { navigate, state } = this.props.navigation;

        return (
            <View style={{ color: 'darkorange'}}>

                <Header 
                    //leftComponent={{ icon: 'menu', color: '#fff',onPress: () =>  navigate('Login'), iconStyle: { color: '#fff' } }}
                    leftComponent={{ icon: 'menu', color: 'white', onPress:() => navigate('Home'), iconStyle: { color: '#fff' } }}
                    centerComponent={{ icon: 'star' ,color: 'pink',     onPress: () => Alert.alert('Enter  to Star  Screen !')   }}
                    rightComponent={{ icon: 'shopping-cart', color: 'yellow',  onPress:() => navigate('Home') }}
                />

                <ScrollView>

                    <View >
                    


                  
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'lightgrey' }}>

                                <Text style={{ color: 'darkorange', fontSize: 25, alignItems: 'center' }}>.                       Won </Text>
                                <View
                                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ alignItems: 'center' }}><Text>.</Text></View>
                                </View></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black' }}>


                                <View
                                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 13, alignItems: 'center' }}> Last Month</Text></View>

                                    <View style={{ alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 13, alignItems: 'center' }}>      This Month</Text></View>
                                    <View style={{ alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 13, alignItems: 'center' }}>       Last Year</Text></View>
                                    <View style={{ alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 13, alignItems: 'center' }}>       This Year</Text></View>
                                    <View style={{ alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 13, alignItems: 'center' }}>          To Date</Text></View>

                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'skyblue' }}>

                                <Text style={{ color: 'green', fontSize: 18, alignItems: 'center' }}>. </Text>
                                <View
                                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ alignItems: 'center' }}><Text style={{ color: 'green', fontSize: 18, alignItems: 'center' }}>.</Text></View>
                                </View></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'skyblue' }}>

                                <Text>Rs 1000 </Text>
                                <View
                                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ alignItems: 'center' }}><Text>Rs 1000</Text></View>

                                </View>
                                <View
                                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ alignItems: 'center' }}><Text>Rs 1000</Text></View>

                                </View>
                                <View
                                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ alignItems: 'center' }}><Text>Rs 1000</Text></View>

                                </View>
                                <View
                                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ alignItems: 'center' }}><Text>Rs 1000</Text></View>

                                </View></View>
                            <Text style={{ color: 'green', fontSize: 25, alignItems: 'center' }}>.                  MENU</Text>
                            <View
                                style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Card>
                                    <TouchableOpacity>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
                                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',width:50,height:10 }}>
                                                


                                            <Avatar
                                                    overlayContainerStyle={{ backgroundColor: 'orange' }}
                                                    rounded
                                                    title={16}
                                                    title='Sept'
                                                />
                                                <Text>Sept  </Text>
                                           
                                            </View>
                                            <View
                                                style={{ flexDirection: 'column', justifyContent: 'space-between',paddingLeft:-860 }}>
                                                <View style={{ alignItems: 'center' }}><Text style={{ color: 'red', fontSize: 18, alignItems: 'center' }}>NIRMAL</Text></View>
                                                <Text style={{ color: 'black', fontSize: 15, alignItems: 'center' }}>NR239</Text>
                                                <Text style={{ color: 'grey', fontSize: 10, alignItems: 'center' }}>2 Tickets</Text>
                                            </View>

                                        </View>
                                    </TouchableOpacity>
                                </Card>
                                <Card>
                                    <TouchableOpacity>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Avatar
                                                    overlayContainerStyle={{ backgroundColor: 'orange' }}
                                                    rounded
                                                    title={16}
                                                    title='Sept'
                                                />
                                                <Text>Sept  </Text>
                                            </View>
                                            <View
                                                style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}><Text style={{ color: 'red', fontSize: 18, alignItems: 'center' }}>AKSHAYA</Text></View>
                                                <Text style={{ color: 'black', fontSize: 15, alignItems: 'center' }}>NR239</Text>
                                                <Text style={{ color: 'grey', fontSize: 10, alignItems: 'center' }}>2 Tickets</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Card>
                                <Card>
                                    <TouchableOpacity>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Avatar
                                                    overlayContainerStyle={{ backgroundColor: 'orange' }}
                                                    rounded
                                                    title={10}
                                                    text={'Sept'}
                                                    title='Sept'
                                                />
                                                <Text>Sept  </Text>
                                            </View>
                                            <View
                                                style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}><Text style={{ color: 'red', fontSize: 18, alignItems: 'center' }}>WIN-WIN</Text></View>
                                                <Text style={{ color: 'black', fontSize: 15, alignItems: 'center' }}>NR239</Text>
                                                <Text style={{ color: 'grey', fontSize: 10, alignItems: 'center' }}>2 Tickets</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Card>
                                <Card>
                                    <TouchableOpacity>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Avatar
                                                    overlayContainerStyle={{ backgroundColor: 'orange' }}
                                                    rounded
                                                    title={8}
                                                    title='Sept'
                                                />
                                                <Text>Sept  </Text>
                                            </View>
                                            <View
                                                style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}><Text style={{ color: 'red', fontSize: 18, alignItems: 'center' }}>KARUNYA</Text></View>
                                                <Text style={{ color: 'black', fontSize: 15, alignItems: 'center' }}>NR239</Text>
                                                <Text style={{ color: 'grey', fontSize: 10, alignItems: 'center' }}>2 Tickets</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Card>
                                <Card>
                                    <TouchableOpacity>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Avatar
                                                    overlayContainerStyle={{ backgroundColor: 'orange' }}
                                                    rounded
                                                    title={15}
                                                    title='Sept'
                                                />
                                                <Text>Sept - </Text>
                                            </View>
                                            <View
                                                style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <View style={{ alignItems: 'center' }}><Text style={{ color: 'red', fontSize: 18, alignItems: 'center' }}>STREE-SHAKTI</Text></View>
                                                <Text style={{ color: 'black', fontSize: 15, alignItems: 'center' }}>NR239</Text>
                                                <Text style={{ color: 'grey', fontSize: 10, alignItems: 'center' }}>2 Tickets</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Card>
                                <Card>
                                    <TouchableOpacity>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Avatar
                                                    overlayContainerStyle={{ backgroundColor: 'orange' }}
                                                    rounded
                                                    title={11}
                                                    title='Sept'
                                                />

                                                <Text> Sept  </Text>
                                            </View>
                                            <View
                                                style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <View style={{ color: 'red', fontSize: 18, alignItems: 'center' }}>
                                                    <Text style={{ color: 'red', fontSize: 18, alignItems: 'center' }}>LIFE VISHU 2021</Text></View>
                                                <Text style={{ color: 'black', fontSize: 15, alignItems: 'center' }}>NR239</Text>
                                                <Text style={{ color: 'grey', fontSize: 10, alignItems: 'center' }}>2 Tickets</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Card>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                                    <View
                                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ alignItems: 'center' }}><Text>.</Text></View>
                                    </View>
                                </View>



                            </View>
                        

                        <Button
                            title="Go to Axxonet screen"
                            onPress={() => navigate('Login')}
                        />
                    <Text>  </Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 40, paddingVertical: 20, marginTop: -10, alignSelf: 'center', justifyContent: 'space-between' }}>


                        <TouchableOpacity
                            style={{ backgroundColor: 'pink', padding: 10, width: 100, borderRadius: -50 ,marginTop: -10,height:60}}
                        >

                            <Text style={{ textAlign: 'center', color: 'green' }} onPress={() => this.userDashboard()}>  Dashboard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: '#0d47a0', padding: 10, width: 100, borderRadius: -50,marginTop: -10, }}
                        >

                            <Text style={{ textAlign: 'center', color: '#FFF' }} onPress={() => this.userPurchased()}> Purchased</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: 'pink', padding: 10, width: 100, borderRadius: -150,marginTop: -10, }}
                        >

                            <Text style={{ textAlign: 'center', color: 'green' }} onPress={() => this.userLotteries()}>Lotteries</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: '#0d47a1', padding: 10, width: 100, borderRadius: -50 ,marginTop: -10,}}
                        >

                            <Text style={{ textAlign: 'center', color: '#FFF' }} onPress={() => this.userCart()}>  Cart</Text>
                        </TouchableOpacity>


                    </View>
                </ScrollView>



            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200
    },
    progressContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
      CircleShape: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#FF9800',
  },
});

