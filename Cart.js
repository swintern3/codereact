import React from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, ScrollView, Text, Button } from 'react-native';
import { Card, Avatar, Tab, Header } from 'react-native-elements';

export default class Cart extends React.Component {

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
                    leftComponent={{ icon: 'menu', color: 'white', onPress:() => navigate('Menu'), iconStyle: { color: '#fff' } }}
                    centerComponent={{ icon: 'star' ,color: 'pink',     onPress: () => Alert.alert('Enter  to Star  Screen !')   }}
                    rightComponent={{ icon: 'shopping-cart', color: 'yellow',  onPress:() => navigate('Cartbar') }}
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
                                    <View style={{ alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 13, alignItems: 'center' }}>            This Year</Text></View>
                                    <View style={{ alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 13, alignItems: 'center' }}>              To Date</Text></View>

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
                            <Text style={{ color: 'green', fontSize: 25, alignItems: 'center' }}>.                  Upcoming</Text>
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
                            onPress={() => navigate('Cart')}
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


// import React, { Component } from 'react';
// import {
//   StyleSheet, Text, View,
// } from 'react-native';
// export default class Cart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       labels: ['Label 1', 'Label 2', 'Label 3'],
//       values: [
//         [1, 2, 3],
//         [11, 22, 33],
//         [111, 222, 333],
//       ]
//     };
//   }
//   renderValues = (values, key) => {
//     return values.map((item, key) => {
//       return this.renderCell(item, key)
//     })
//   }
//   getStyle = (index) => {
//     switch (index) {
//       case 0:
//         return [styles.row_1, styles.rowDefault]
//       case 1:
//         return [styles.row_2, styles.rowDefault]
//       case 2:
//         return [styles.row_3, styles.rowDefault]
//     }
//   }
//   renderCell = (value, key) => {
//     return <View style={this.getStyle(key)} key={key}><Text key={key} style={styles.valueStyle}>{value}</Text></View>
//   }

//   renderRow = (choice) => {
//     return choice === "label" ? <View style={styles.row}>
//       {this.state.labels.map((item, key) => (
//         this.renderCell(item, key)
//       ))}</View> : <View>
//         {this.state.values.map((item, key) => (
//           <View style={styles.row} key={key}>
//             {this.renderValues(item, key)}
//           </View>
//         ))}</View>
//   }
//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: "white" }}>
//         {this.renderRow("label")}
//         {this.renderRow("val")}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: "row",
//     height: 30,
//   },
//   rowDefault: {
//     padding: 2,
//     borderColor: "black",
//     borderWidth: 1
//   },
//   row_1: {
//     flex: 1,
//   },
//   row_2: {
//     flex: 2,
//   },
//   row_3: {
//     flex: 3,
//   },
//   valueStyle: {
//     flex: 1,
//   }
// });


// import React, { Component } from 'react';
// import {
//   StyleSheet, Text, View,FlatList
// } from 'react-native';

// export default class Cart extends Component {

//     render() {
//      return (
//       <View style={styles.view}>
//        <FlatList
//          data={['1', '2', '3', '4', '5', '6', '7', '8']}
//          numColumns={4}
//          renderItem={({ item }) => (
//            <View style={styles.separator}>
//              <Text style={styles.text}>{item}</Text>
//            </View>
//          )}
//        />
//       </View>
//      );
//     }
//    }

//    const styles = StyleSheet.create({
//     view: {
//      paddingTop: 30,
//     },
//     text: {
//      flex: 1,
//      fontSize: 40,
//      textAlign: 'center'
//     },
//     separator: {
//      flex: 1, 
//      borderWidth: 1, 
//      borderColor: 'red'
//     },
//    });