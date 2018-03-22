import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import {connect} from 'react-redux';

class Filter extends Component {
    getTextStyle (statusName){
        const {myFilterStatus} = this.props;
        if (statusName === myFilterStatus) {
            return {
                color : 'yellow',
                fontWeight: 'bold',
            }
        } else {
            return style.buttonText;
        }
    }

    setFilterStatus(actionType){
        this.props.dispatch({
            type : actionType
        })
    }

    render() {
        return (
            <View style={style.container}>
                <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_SHOW_ALL')}>
                    <Text style = {this.getTextStyle('SHOW_ALL')}>Show All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_MEMORIZED')}>
                    <Text style = {this.getTextStyle('MEMORIZED')}>Memorize</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_NEED_PRACTICE')}>
                    <Text style = {this.getTextStyle('NEED_PRACTICE')}>Need Practice</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps (state){
    return {
        myFilterStatus: state.filterStatus
    }
}

export default connect (mapStateToProps)(Filter);

const style = StyleSheet.create({
    container: {
        backgroundColor: '#583C3C',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    buttonText : {
        color: 'white'
    }

});