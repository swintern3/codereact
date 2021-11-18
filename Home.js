import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';


export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {

        const { navigate } = this.props.navigation;
        

        return (
            <View style={styles.container}>

                <Button
                    title="Go to login screen"
                    onPress={() => navigate(
                        'Login', { name: 'Axxonet' }
                    )}
                />
            <Text>Welcome to Axxonet Technologies</Text>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color:'red'
    }
});