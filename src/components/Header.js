import React, { Component } from 'react';
import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native';
import { connect } from 'react-redux';


class Header extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
            }}>
                <Text />
                <Text>UET_LIB</Text>
                <TouchableOpacity onPress={() => this.props.dispatch({ type: "BAT_THEM_TU" })}>
                    <Text>Them sach</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect ()(Header);


const style = StyleSheet.create({
   
    button: {

        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flex: 1,
    },
    

});